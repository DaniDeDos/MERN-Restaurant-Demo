import React, { useState, useContext } from "react";
import logo from "../imgs/logo.png";
import { Link, Outlet } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { LuFileEdit } from "react-icons/lu";
import { GoBell } from "react-icons/go";
import { UserContext } from "../App";
import UserNavigationPanel from "./user-navigation.component";

const Navbar = () => {

  const handleUserNavPanel = () => {
    setUserNavPanel((currentValue) => !currentValue);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setUserNavPanel(false);
    }, 200);
  };

  return (
    <>
      <header className="l-header" id="header">
        <nav className="nav bd-container">
          <Link to={"#"} className="nav__logo">
            Tasty
          </Link>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to={"/home"} className="nav__link active-link">
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/about"} className="nav__link">
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/services"} className="nav__link">
                  Services
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/menu"} className="nav__link">
                  Menu
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/contact"} className="nav__link">
                  Contact us
                </Link>
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

      <Outlet />
    </>
  );
};

export default Navbar;
