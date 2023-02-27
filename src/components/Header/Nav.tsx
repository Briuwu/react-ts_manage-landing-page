import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { navContainer, liVariants } from "../Transition";

const navItems = ["Pricing", "Product", "About Us", "Careers", "Community"];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItemsElement = navItems.map((eachItem) => (
    <motion.li variants={liVariants} key={eachItem} className="nav__items-each">
      {eachItem}
    </motion.li>
  ));

  const navItemsDesktop = navItems.map((eachItem) => (
    <li key={eachItem} className="nav__items-each">
      {eachItem}
    </li>
  ));

  function handleMenuClick() {
    setIsOpen((prev) => !prev);
  }

  const menuImg = isOpen
    ? "./assets/images/icon-close.svg"
    : "./assets/images/icon-hamburger.svg";

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`nav flex ${isOpen ? "active" : ""}`}
    >
      <button onClick={handleMenuClick} className="nav__btn">
        <img src={menuImg} alt="" />
        <span className="sr-only">menu</span>
      </button>
      {/* NAV ITEMS FOR MOBILE */}
      <motion.ul variants={navContainer} className={`nav__items mobile`}>
        {navItemsElement}
      </motion.ul>
      {/* NAV ITEMS FOR DESKTOP */}
      <ul className={`nav__items desktop`}>{navItemsDesktop}</ul>
    </motion.nav>
  );
};

export default Nav;
