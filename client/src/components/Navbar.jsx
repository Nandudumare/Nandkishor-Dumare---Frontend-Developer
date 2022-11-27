import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <div></div>
      <div>
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
