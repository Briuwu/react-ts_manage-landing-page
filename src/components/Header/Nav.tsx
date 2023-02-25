import React from "react";

const navItems = ["Pricing", "Product", "About Us", "Careers", "Community"];

const Nav = () => {
  const navItemsElement = navItems.map((eachItem) => (
    <li key={eachItem} className="nav__items-each">
      {eachItem}
    </li>
  ));
  return (
    <nav className="nav">
      <button className="nav__btn">
        <span className="sr-only">menu</span>
      </button>
      <ul className="nav__items">{navItemsElement}</ul>
    </nav>
  );
};

export default Nav;
