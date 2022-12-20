import React from "react";

import classes from "./MainButton.module.css";

const MainButton = (props) => {
  return (
    <button
      className={classes.mainButton}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default MainButton;
