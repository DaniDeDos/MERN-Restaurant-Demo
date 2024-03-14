import React, { useContext, useState, useEffect } from "react";
import InputBox from "../components/input.component";
import { RiUserLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { BsKey } from "react-icons/bs";
import googleIcon from "../imgs/google.png";
import { Link, useNavigate } from "react-router-dom";
import AnimationWrapper from "../common/page-animation";
import clienteAxios from "../config/axios";
import { Toaster, toast } from "react-hot-toast";
import { storeInSession } from "../common/session";
import { UserContext } from "../App";

import authWithGoogle from "../common/firebase";

const UserAuthForm = ({ type }) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  let {
    userAuth: { access_token },
    setUserAuth,
  } = useContext(UserContext);

  useEffect(() => {
    if (access_token) {
      navigate("/");
    }
  }, [access_token, navigate]);

  console.log(access_token);
  const registrarUsuario = async (serverRoute, formData) => {
    try {
      const respuesta = await clienteAxios.post(serverRoute, formData);
      console.log(respuesta.data);
      console.log(formData);

      if (respuesta.data) {
        storeInSession("user", JSON.stringify(respuesta.data));
        setUserAuth(respuesta.data);
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let serverRoute =
      type === "sign-in" ? "/api/auth/signin" : "/api/auth/signup";

    registrarUsuario(serverRoute, formState);
  };

  const handleChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGoogleAuth = async (e) => {
    e.preventDefault();

    authWithGoogle()
      .then((user) => {
        let serverRouteG = "/api/auth/google-auth";
        let formState = {
          access_token: user.accessToken,
        };

        registrarUsuario(serverRouteG, formState);
      })
      .catch((error) => {
        toast.error("trouble login through google");
        console.log(error);
      });
  };

  return access_token ? (
    navigate("/")
  ) : (
    <AnimationWrapper keyValue={type}>
      <section className="h-cover flex items-center justify-center">
        <Toaster />
        <form
          id="formElement"
          className="w-[80%] max-w-[400px]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
            {type === "sign-in" ? "Bienvenido de nuevo" : "Unete a nosotros"}
          </h1>
          {type !== "sign-in" && (
            <InputBox
              icon={RiUserLine}
              name="name"
              type="text"
              placeholder="Nombre"
              value={formState.name}
              onChange={handleChange}
            />
          )}

          <InputBox
            icon={MdAlternateEmail}
            name="email"
            type="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
          />
          <InputBox
            icon={BsKey}
            name="password"
            type="password"
            placeholder="contraseña"
            value={formState.password}
            onChange={handleChange}
          />

          <button className="btn-dark center mt-14" type="submit">
            {type.replace("-", " ")}
          </button>
          <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
            <hr className="w-1/2 border-black" />
            <p>or</p>
            <hr className="w-1/2 border-black" />
          </div>

          <button
            className="btn-dark flex items-center justify-center gap-4 w-[90%] center"
            onClick={handleGoogleAuth}
          >
            <img src={googleIcon} alt="google icon" className="w-5" />
            contunuar con google
          </button>
          {type === "sign-in" ? (
            <p className="mt-6 text-dark-grey text-xl text-center">
              No tengo una cuenta?
              <Link
                to={"/signup"}
                className="underline text-black text-xl ml-1"
              >
                Únete a nosotros
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-dark-grey text-xl text-center">
              Ya eres miembro?
              <Link
                to={"/signin"}
                className="underline text-black text-xl ml-1"
              >
                Login aqui.
              </Link>
            </p>
          )}
        </form>
      </section>
    </AnimationWrapper>
  );
};

export default UserAuthForm;
