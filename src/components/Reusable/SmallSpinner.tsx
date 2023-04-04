import React from "react";
import classes from "./SmallSpinner.module.scss";

const SmallSpinner = () => {
  return (
    <div className={classes.spin}>
      <div className={classes.spinner} />
    </div>
  );
};

export default SmallSpinner;
