import React from "react";

import classes from "./MainHeader.module.css";
import logo from "../../images/Logo.png";

import UserControls from "./UserControls";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <img src={logo} alt="KeySee" className={classes.logo__img} />
        <UserControls />
      </nav>
    </header>
  );
};

export default MainHeader;
