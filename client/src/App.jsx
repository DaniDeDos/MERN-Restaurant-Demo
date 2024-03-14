import Nabvar from "./components/navbar.component";
import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserAuthForm from "./pages/userAuthForm.page";
import { lookInSession } from "./common/session";
import Home from "./pages/home.page";
import About from "./pages/about.page";

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
          <Route exact path="/about" element={<About/>} />

          <Route
            exact
            path="/signin"
            element={<UserAuthForm type={"sign-in"} />}
          />
          <Route
            exact
            path="/signup"
            element={<UserAuthForm type={"sign-up"} />}
          />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
/*
import "../styles.css";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Nabvar />} />
    </Routes>
  );
};

export default App;


    <header className="l-header" id="header">
      <nav class="nav bd-container">
        <a href="#" className="nav__logo">
          Tasty
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" class="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" class="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" class="nav__link">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#menu" class="nav__link">
                Menu
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" class="nav__link">
                Contact us
              </a>
            </li>

            <li>
              <i className="bx bx-moon change-theme" id="theme-button"></i>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
 */
