import React from "react";
import classes from "./Error.module.scss";
import errorImage from "../../images/404.png";

const Error = () => {
  return (
    <div className={classes.container}>
      <img src={errorImage} alt="404" className={classes.error} />
    </div>
  );
};

export default Error;
