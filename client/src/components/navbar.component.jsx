import React, { useState, useContext } from "react";
import logo from "../imgs/logo.png";
import { Link, Outlet } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { LuFileEdit } from "react-icons/lu";
import { GoBell } from "react-icons/go";
import { UserContext } from "../App";
import UserNavigationPanel from "./user-navigation.component";

const Navbar = () => {
  const [userNavPanel, setUserNavPanel] = useState(false);

  const {
    userAuth: { access_token, profile_img },
  } = useContext(UserContext);

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
      <nav className="navbar">
        <Link to={"/"} className="flex-none w-10">
          <img src={logo} className="w-full" />
        </Link>

        <div className="flex items-center gap-3 md:gap-6 ml-auto justify-center">
          <Link to={"/"} className="hidden md:flex gap-2 link">
            <LuFileEdit className="mt-0.5" />
            <p>Home</p>
          </Link>
          <Link to={"/about"} className="hidden md:flex gap-2 link">
            <LuFileEdit className="mt-0.5" />
            <p>About</p>
          </Link>
          <Link to={"/"} className="hidden md:flex gap-2 link">
            <LuFileEdit className="mt-0.5" />
            <p>Services</p>
          </Link>
          <Link to={"/"} className="hidden md:flex gap-2 link">
            <LuFileEdit className="mt-0.5" />
            <p>Contact us</p>
          </Link>
        </div>
        <div className="flex items-center gap-3 md:gap-6 ml-auto justify-center">
          {access_token ? (
            <>
              <Link to={"/dashboard/notification"}>
                <button className="w-12 h-12 rounded-full bg-grey relative hover:bg-black/10 flex items-center justify-center">
                  <GoBell className="mt-1 text-2xl block" />
                </button>
              </Link>
              <div
                className="relative"
                onClick={handleUserNavPanel}
                onBlur={handleBlur}
              >
                <button className="w-12 h-12 mt-1">
                  <img
                    src={profile_img}
                    className="w-full h-full object-cover rounded-full"
                    alt="profile img"
                  />
                </button>
                {userNavPanel ? <UserNavigationPanel /> : ""}
              </div>
            </>
          ) : (
            <>
              <Link to={"/signin"} className="btn-dark py-2">
                Sign In
              </Link>
              <Link to={"/signup"} className="btn-ligth py-2 hidden md:block">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
