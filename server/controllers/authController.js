import { validationResult } from "express-validator";
import bcryptjs from "bcryptjs";
import { nanoid } from "nanoid";
import jwt from "jsonwebtoken";
import { getAuth } from "firebase-admin/auth";
import User from "../Schema/User.js";
import admin from "firebase-admin";
import serviceAccount from "../config/react-js-blog-a1bee-firebase-adminsdk-xna4x-467fef930a.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// formatear
const formatearDataSend = (user) => {
  const access_token = jwt.sign(
    { id: user._id },
    process.env.SECRET_ACCESS_KEY,
    {
      expiresIn: 3600, //1h
    }
  );

  return {
    username: user.personal_info.name,
    profile_img: user.personal_info.profile_img,
    username: user.personal_info.username,
    access_token,
  };
};

const signup = async (req, res) => {
  // Presisar errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(403).json({ errores: errores.array() });
  }

  // Extraer los datos
  let { name, email, password } = req.body;
  let username = email.split("@")[0];

  try {
    // Presisar que el usuario no existe via email
    let usuario = await User.findOne({ "personal_info.email": email });

    if (usuario) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }

    // Crear un el username
    let esUnicoUserName = await User.exists({
      "personal_info.username": username,
    }).then((result) => result);

    esUnicoUserName ? (username += nanoid().substring(0, 4)) : "";

    // Hashear el password
    const salt = await bcryptjs.genSalt(10);
    password = await bcryptjs.hash(password, salt);

    // Crear un nuevo usuario
    usuario = new User({
      personal_info: { name, email, password, username },
    });

    await usuario.save().then((u) => {
      return res.status(200).json(formatearDataSend(u));
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "hubo un error" });
  }
};

const signin = async (req, res) => {
  // Presisar errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(403).json({ errores: errores.array() });
  }

  // Extraer los datos
  let { email, password } = req.body;

  try {
    if (!usuario.google_auth) {
      // Presisar que el usuario no existe via email
      let usuario = await User.findOne({ "personal_info.email": email });

      if (!usuario) {
        return res.status(200).json({ msg: "El email es incorrecto" });
      }

      // Revisa password
      bcryptjs.compare(
        password,
        usuario.personal_info.password,
        (error, result) => {
          if (error)
            res.status(403).json({ msg: "hubo un error durante el login" });
          if (!result) {
            res.status(400).json({ msg: "El password es incorrecto" });
          } else {
            return res.status(200).json(formatearDataSend(usuario));
          }
        }
      );
    } else {
      return res.status(403).json({
        error:
          "account was created using google. please try login whidth other account",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "hubo un error" });
  }
};

const googleAuth = async (req, res) => {
  let { access_token } = req.body;

  getAuth()
    .verifyIdToken(access_token)
    .then(async (decodedUser) => {
      let { email, name, picture } = decodedUser;

      picture.replace("s96-c", "s384-c");

      let user = User.findOne({
        "personal_info.email": email,
      })
        .select(
          "personal_info.name personal_info.username personal_info.profile_img google_auth"
        )
        .then((u) => {
          return u || null;
        })
        .catch((error) => {
          return res.status(500).json({ error: error.message });
        });

      if (user) {
        // login
        if (!user.google_auth) {
          return res.status(403).json({
            error:
              "this email was signed up without google. please log in whidth password to access the account",
          });
        }
      } else {
        //siguin up
        // Crear un el username
        let esUnicoUserName = await User.exists({
          "personal_info.username": username,
        }).then((result) => result);

        esUnicoUserName ? (username += nanoid().substring(0, 4)) : "";

        // Crear un nuevo usuario
        usuario = new User({
          personal_info: { name, email, profile_img: picture, username },
          google_auth: true,
        });

        await usuario
          .save()
          .then((u) => {
            usuario = u;
          })
          .catch((error) => {
            return res.status(500).json({ error: error.message });
          });
      }
      return res.status(200).json(formatearDataSend(usuario));
    })
    .catch((error) => {
      return res.status(500).json({
        error: "fallo la autentificacion con google, pruebe con otra cuenta",
      });
    });
};

export { signup, signin, googleAuth };
