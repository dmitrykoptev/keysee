import React, { useState } from "react";

import classes from "./LoginForm.module.css";
import logoMain from "../../images/LogoMain.png";
import useInput from "../../hooks/use-input";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState(false);
  const [passwordType, setPasswordType] = useState(true);
  const [checkBox, setCheckBox] = useState(true);
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
    console.log(enteredEmail, enteredPassword);

    let url;
    if (signIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBD3lPiWWjbfHBAvg0UlC2IOXOzKqlhSTY";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBD3lPiWWjbfHBAvg0UlC2IOXOzKqlhSTY";
    }

    const sendRequest = async () => {
      const request = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!request.ok) {
        throw new Error("Something went wrong ...");
      }

      const data = await request.json();

      dispatch(authActions.logIn(data.idToken));
    };

    try {
      sendRequest();
    } catch (error) {
      alert(error.message);
    }

    // history.replace("/main");
    resetEmailInput();
    resetPasswordInput();
  };

  const signInHandler = (event) => {
    event.preventDefault();

    setSignIn((prev) => !prev);
  };

  const seePasswordHandler = () => {
    setPasswordType((prev) => !prev);
  };

  const seePasswordClasses = passwordType
    ? `${classes.seePassword}`
    : `${classes.seePassword} ${classes.seeText}`;

  const checkBoxClasses = !checkBox
    ? `${classes.checkBox}`
    : `${classes.checkBox} ${classes.checkedBox}`;

  const emailInputClasses = !emailInputHasError
    ? `${classes.formInput}`
    : `${classes.formInput} ${classes.wrongCredentials}`;

  const passwordInputClasses = !passwordInputHasError
    ? `${classes.formInput}`
    : `${classes.formInput} ${classes.wrongCredentials}`;

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler} className={classes.loginForm}>
        <h1>Sign {!signIn ? "Up" : "In"}</h1>
        <div className={classes.newUser}>
          <span>{!signIn ? "Have an account?" : "New user?"}</span>
          <button onClick={signInHandler}>Sign {!signIn ? "in" : "up"}.</button>
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
          <div className={classes.passwordInput}>
            <input
              type={passwordType ? "password" : "text"}
              placeholder="Password"
              className={passwordInputClasses}
              value={enteredPassword}
              onChange={passwordChangedHandler}
              onBlur={passwordBlurHandler}
            ></input>
            <div
              className={seePasswordClasses}
              onClick={seePasswordHandler}
            ></div>
          </div>
        </div>
        {signIn && (
          <div className={classes.stayLoggedIn}>
            <div onClick={checkBoxHandler} className={checkBoxClasses}></div>
            <span>Remember me</span>
          </div>
        )}
        <button
          disabled={!formIsValid}
          className={classes.loginFormButton}
          type="submit"
        >
          Sign {!signIn ? "Up" : "In"}
        </button>
        {signIn && (
          <div className={classes.forgotPassword}>Forgot password?</div>
        )}
      </form>
      <img src={logoMain} alt="keysee" className={classes.mainLogo} />
    </div>
  );
};

export default LoginForm;
