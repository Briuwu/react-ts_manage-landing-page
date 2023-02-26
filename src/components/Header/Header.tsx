import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header flex container">
      <img
        className="header__logo"
        src="./assets/images/logo.svg"
        alt="Managa Logo"
      />
      <Nav />
      <a className="header__start primary-btn btn" href="#">
        Get Started
      </a>
    </header>
  );
};

export default Header;
