import React, { useState } from "react";

import classes from "./LoginForm.module.css";
import { ReactComponent as CheckBox } from "../../icons/checkBox.svg";
import { ReactComponent as CheckedBox } from "../../icons/checkedBox.svg";
import logoMain from "../../images/LogoMain.png";
import useInput from "../../hooks/use-input";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();
  const [checkBox, setCheckBox] = useState(false);
  const checkBoxHandler = () => {
    setCheckBox((prev) => !prev);
  };

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(
    (value) =>
      value.includes("@") && value.includes(".") && value.trim().length >= 6
  );

  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    isValid: enteredPasswordIsValid,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim().length >= 6);

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    history.replace("/main");

    resetEmailInput();
    resetPasswordInput();
  };

  const emailInputClasses = !emailInputHasError
    ? `${classes.formInput}`
    : `${classes.formInput} ${classes.wrongCredentials}`;

  const passwordInputClasses = !passwordInputHasError
    ? `${classes.formInput}`
    : `${classes.formInput} ${classes.wrongCredentials}`;

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler} className={classes.loginForm}>
        <h1>Sign in</h1>
        <div className={classes.newUser}>
          <span>New user?</span>
          <button href="/">Sign up!</button>
        </div>
        <div className={classes.inputsContainer}>
          <input
            type="email"
            placeholder="Email"
            className={emailInputClasses}
            value={enteredEmail}
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className={passwordInputClasses}
            value={enteredPassword}
            onChange={passwordChangedHandler}
            onBlur={passwordBlurHandler}
          ></input>
        </div>
        <div className={classes.stayLoggedIn}>
          <div onClick={checkBoxHandler} className={classes.checkBox}>
            {!checkBox && <CheckBox />}
            {checkBox && <CheckedBox />}
          </div>
          <span>Remember me</span>
        </div>
        <button
          disabled={!formIsValid}
          className={classes.loginFormButton}
          type="submit"
        >
          Sign in
        </button>
        <span className={classes.forgotPassword}>Forgot password?</span>
      </form>
      <img src={logoMain} alt="keysee" className={classes.mainLogo} />
    </div>
  );
};

export default LoginForm;
