import React, { useState } from "react";
import classes from "./PasswordInput.module.scss";
import { IPasswordInput } from "../../models/passwordInput";

const PasswordInput = ({
  inputType,
  isError,
  placeholder,
  enteredPassword,
  enteredEmail,
  passwordInputHasError,
  emailInputHasError,
  passwordChangedHandler,
  emailChangedHandler,
  passwordBlurHandler,
  emailBlurHandler,
}: IPasswordInput) => {
  const [passwordType, setPasswordType] = useState(true);

  let passwordTypeValue;
  if (inputType === "email") {
    passwordTypeValue = "text";
  } else if (inputType === "password") {
    passwordTypeValue = passwordType ? "password" : "text";
  }

  const seePasswordHandler = () => {
    setPasswordType((prev) => !prev);
  };

  const passwordInputClasses =
    passwordInputHasError || emailInputHasError || isError
      ? `formInput wrongCredentials`
      : `formInput`;

  const seePasswordClasses = passwordType
    ? `${classes.passwordInput__icon} ${
        classes[`passwordInput__icon--hideText`]
      }`
    : `${classes.passwordInput__icon} ${
        classes[`passwordInput__icon--seeText`]
      }`;

  let inputOption;
  if (inputType === "email") {
    inputOption = (
      <input
        type={passwordTypeValue}
        placeholder={placeholder}
        className={passwordInputClasses}
        value={enteredEmail}
        onChange={emailChangedHandler}
        onBlur={emailBlurHandler}
      />
    );
  }
  if (inputType === "password") {
    inputOption = (
      <input
        type={passwordTypeValue}
        placeholder={placeholder}
        className={passwordInputClasses}
        value={enteredPassword}
        onChange={passwordChangedHandler}
        onBlur={passwordBlurHandler}
      />
    );
  }

  return (
    <div className={classes.passwordInput}>
      {inputOption}
      {inputType === "password" && (
        <div className={seePasswordClasses} onClick={seePasswordHandler}></div>
      )}
    </div>
  );
};

export default PasswordInput;
