import React, { useCallback, useState } from "react";

import classes from "./LoginForm.module.css";
import logoMain from "../../images/LogoMain.png";
import useInput from "../../hooks/use-input";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const rememberMe = useSelector((state) => state.auth.rememberMe);
  const isError = useSelector((state) => state.auth.error);
  const [passwordType, setPasswordType] = useState(true);
  const [checkBox, setCheckBox] = useState(true);

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    inputFocusHandler: emailFocusHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().length >= 1);

  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    isValid: enteredPasswordIsValid,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim().length >= 1);

  const checkBoxHandler = () => {
    setCheckBox((prev) => !prev);
    dispatch(authActions.rememberMeHandler());
  };

  let formIsValid = false;
  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const logoutHandler = useCallback(() => {
    dispatch(authActions.logOut());
  }, [dispatch]);

  const submitHandler = (event) => {
    event.preventDefault();

    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBD3lPiWWjbfHBAvg0UlC2IOXOzKqlhSTY";

    const sendRequest = async () => {
      const response = await fetch(url, {
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

      if (!response.ok) {
        throw new Error("Email or password was wrong");
      }

      const data = await response.json();
      dispatch(authActions.logIn(data.idToken));

      if (!rememberMe) {
        console.log("Logout in 3 seconds");
        setTimeout(logoutHandler, 3000);
      }
    };

    sendRequest().catch((err) => {
      dispatch(authActions.showError(err.message));
    });

    document.activeElement.blur();
    resetEmailInput();
    resetPasswordInput();
  };

  const signInHandler = () => {
    history.replace("/register");
    dispatch(authActions.removeError());
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

  const emailInputClasses =
    emailInputHasError || isError
      ? `${classes.formInput} ${classes.wrongCredentials}`
      : `${classes.formInput}`;

  const passwordInputClasses =
    passwordInputHasError || isError
      ? `${classes.formInput} ${classes.wrongCredentials}`
      : `${classes.formInput}`;

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler} className={classes.loginForm}>
        <h1>Sign In</h1>
        <div className={classes.newUser}>
          <p>New user?</p>
          <span onClick={signInHandler}>Sign up.</span>
        </div>
        <div className={classes.inputsContainer}>
          <input
            type="email"
            placeholder="Email"
            className={emailInputClasses}
            value={enteredEmail}
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            onFocus={emailFocusHandler}
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
        {/* {validationError && (
          <p className={classes.errorText}>
            Please enter correct email & password.
          </p>
        )} */}
        {isError && <p className={classes.errorText}>{isError.errorMessage}</p>}
        {!isError && (
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
          Sign In
        </button>
        <div className={classes.forgotPassword}>Forgot password?</div>
      </form>
      <img src={logoMain} alt="keysee" className={classes.mainLogo} />
    </div>
  );
};

export default LoginForm;
