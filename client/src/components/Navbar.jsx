import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={Styles.navbar}>
        <div></div>
        <div>
          <GiHamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
