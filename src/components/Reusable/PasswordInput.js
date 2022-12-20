import React, { useState } from "react";

import classes from "./PasswordInput.module.css";

const PasswordInput = (props) => {
  const [passwordType, setPasswordType] = useState(true);

  const seePasswordHandler = () => {
    setPasswordType((prev) => !prev);
  };

  const passwordInputClasses =
    props.passwordInputHasError || props.isError
      ? `formInput wrongCredentials`
      : `formInput`;

  const seePasswordClasses = passwordType
    ? `${classes.seePassword}`
    : `${classes.seePassword} ${classes.seeText}`;

  return (
    <div className={classes.passwordInput}>
      <input
        type={passwordType ? "password" : "text"}
        placeholder={props.placeholder}
        className={passwordInputClasses}
        value={props.enteredPassword}
        onChange={props.passwordChangedHandler}
        onBlur={props.passwordBlurHandler}
      ></input>
      <div className={seePasswordClasses} onClick={seePasswordHandler}></div>
    </div>
  );
};

export default PasswordInput;
