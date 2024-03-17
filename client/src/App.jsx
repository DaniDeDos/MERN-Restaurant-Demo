import Nabvar from "./components/navbar.component";
import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { lookInSession } from "./common/session";
import Home from "./pages/home.page";
import About from "./pages/about.page";
import Services from "./pages/services.page";
import Menu from "./pages/menu.page";
import Contact from "./pages/contact.page";

export const UserContext = createContext({});

const App = () => {
  const [userAuth, setUserAuth] = useState({ access_token: null }); // Inicializa con un objeto

  useEffect(() => {
    let userInSession = lookInSession("user");

    userInSession
      ? setUserAuth(JSON.parse(userInSession))
      : setUserAuth({ access_token: null });
  }, []);

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <Routes>
        <Route exact path="/" element={<Nabvar />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
