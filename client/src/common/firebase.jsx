import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8JlPFYB_OWg6R99GXnZ3d7a4QLXGusDM",
  authDomain: "react-js-blog-a1bee.firebaseapp.com",
  projectId: "react-js-blog-a1bee",
  storageBucket: "react-js-blog-a1bee.appspot.com",
  messagingSenderId: "173503742751",
  appId: "1:173503742751:web:f48906e82438539c4be62a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

const authWithGoogle = async () => {
  let user = null;

  await signInWithPopup(auth, provider)
    .then((result) => {
      user = result.user;
    })
    .catch((error) => {
      console.log(error);
    });

  return user;
};

export default authWithGoogle;
