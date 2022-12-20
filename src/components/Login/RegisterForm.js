import React from "react";

import classes from "./AuthForm.module.css";
import logoMain from "../../images/LogoMain.png";
import useInput from "../../hooks/use-input";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";
import MainButton from "../Reusable/MainButton";
import PasswordInput from "../Reusable/PasswordInput";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.auth.error);

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    inputFocusHandler: emailFocusHandler,
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

  let validationError = false;
  if (emailInputHasError || passwordInputHasError) {
    validationError = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const sendRequest = async () => {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBD3lPiWWjbfHBAvg0UlC2IOXOzKqlhSTY",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("This email already exists");
      }

      const data = await response.json();
      dispatch(authActions.logIn(data.idToken));
    };

    sendRequest().catch((err) => {
      dispatch(authActions.showError(err.message));
    });

    document.activeElement.blur();
    resetEmailInput();
    resetPasswordInput();
  };

  const signInHandler = () => {
    history.replace("/login");
    dispatch(authActions.removeError());
  };

  const emailInputClasses =
    emailInputHasError || isError ? `formInput wrongCredentials` : `formInput`;

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler} className={classes.loginForm}>
        <h1>Sign Up</h1>
        <div className={classes.newUser}>
          <p>Have an account?</p>
          <span onClick={signInHandler}>Sign in.</span>
        </div>
        <div className="inputsContainer">
          <input
            type="email"
            placeholder="Email"
            className={emailInputClasses}
            value={enteredEmail}
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            onFocus={emailFocusHandler}
          ></input>
          <PasswordInput
            enteredPassword={enteredPassword}
            passwordInputHasError={passwordInputHasError}
            enteredPasswordIsValid={enteredPasswordIsValid}
            passwordChangedHandler={passwordChangedHandler}
            passwordBlurHandler={passwordBlurHandler}
            resetPasswordInput={resetPasswordInput}
            placeholder="Password"
          />
        </div>
        {validationError && (
          <p className={classes.errorText}>
            Please enter correct email & password.
          </p>
        )}
        {isError && <p className={classes.errorText}>{isError.errorMessage}</p>}
        {/* {signIn && !isError && (
          <div className={classes.stayLoggedIn}>
            <div onClick={checkBoxHandler} className={checkBoxClasses}></div>
            <span>Remember me</span>
          </div>
        )} */}
        <MainButton title="Sign Up" type="submit" disabled={!formIsValid} />
      </form>
      <img src={logoMain} alt="keysee" className={classes.mainLogo} />
    </div>
  );
};

export default LoginForm;
