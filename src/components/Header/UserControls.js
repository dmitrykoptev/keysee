import React from "react";

import classes from "./UserControls.module.css";
import userImg from "../../images/Photo.png";
import { IoIosArrowDown } from "react-icons/io";

const UserControls = () => {
  return (
    <div className={classes.user__controls}>
      <img src={userImg} alt="User Avatar" className={classes.user__avatar} />
      <IoIosArrowDown className={classes.options__icon} />
    </div>
  );
};

export default UserControls;
