import React, { useState } from "react";

import classes from "../Login/AuthForm.module.css";
import useInput from "../../hooks/use-input";
import logoMain from "../../images/LogoMain.png";
import MainButton from "../Reusable/MainButton";
import PasswordInput from "../Reusable/PasswordInput";
import { useHistory } from "react-router-dom";
import { notificationActions } from "../../store/notification";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../Notification/Notification";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [passwordReset, setPasswordReset] = useState(false);
  const notification = useSelector((state) => state.notification.notification);
  const showNotification = useSelector(
    (state) => state.notification.showNotification
  );

  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    isValid: enteredPasswordIsValid,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim().length >= 6);

  const {
    value: enteredPasswordRepeat,
    hasError: passwordInputHasErrorRepeat,
    isValid: enteredPasswordIsValidRepeat,
    valueChangeHandler: passwordChangedHandlerRepeat,
    inputBlurHandler: passwordBlurHandlerRepeat,
    reset: resetPasswordInputRepeat,
  } = useInput((value) => value.trim().length >= 6);

  let validationError = false;
  if (passwordInputHasError || passwordInputHasErrorRepeat) {
    validationError = true;
  }

  let formIsValid = false;
  if (enteredPasswordIsValid && enteredPassword === enteredPasswordRepeat) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const sendRequest = async () => {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBD3lPiWWjbfHBAvg0UlC2IOXOzKqlhSTY",
        {
          method: "POST",
          body: JSON.stringify({
            //
            // ЧТО НУЖНО ОТПРАВЛЯТЬ, ЧТОБЫ ИЗМЕНИЛСЯ ПАРОЛЬ У КОНКРЕТНОГО ЮЗЕРА?
            //
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong...");
      }

      setPasswordReset(true);
      setTimeout(() => {
        history.replace("./login");
      }, 4000);
    };

    sendRequest().catch((err) => {
      dispatch(
        notificationActions.showNotification({
          status: "error",
          message: err.message,
        })
      );
      setTimeout(() => {
        dispatch(notificationActions.hideNotification());
      }, 2500);
      setTimeout(() => {
        dispatch(notificationActions.resetNotification());
      }, 4000);
    });
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler} className={classes.loginForm}>
        {!passwordReset && (
          <>
            <h1>Reset password</h1>
            <div className="inputsContainer">
              <PasswordInput
                enteredPassword={enteredPassword}
                passwordInputHasError={passwordInputHasError}
                enteredPasswordIsValid={enteredPasswordIsValid}
                passwordChangedHandler={passwordChangedHandler}
                passwordBlurHandler={passwordBlurHandler}
                resetPasswordInput={resetPasswordInput}
                placeholder="New password"
              />
              <PasswordInput
                enteredPassword={enteredPasswordRepeat}
                passwordInputHasError={passwordInputHasErrorRepeat}
                enteredPasswordIsValid={enteredPasswordIsValidRepeat}
                passwordChangedHandler={passwordChangedHandlerRepeat}
                passwordBlurHandler={passwordBlurHandlerRepeat}
                resetPasswordInput={resetPasswordInputRepeat}
                placeholder="Old password"
              />
            </div>
            {validationError && (
              <span className={classes.errorText}>
                Password can't be less then 6 symbols.
              </span>
            )}
            <MainButton title="Confirm" type="submit" disabled={!formIsValid} />
          </>
        )}
        {passwordReset && (
          <span className={classes.sucessReg}>
            Your password has been reset successfully!
          </span>
        )}
      </form>
      <img src={logoMain} alt="keysee" className={classes.mainLogo} />

      <Notification
        show={showNotification}
        status={notification.status}
        message={notification.message}
      />
    </div>
  );
};

export default ResetPassword;
