import React, { FormEvent, useState } from "react";
import classes from "../Login/AuthForm.module.scss";
import useInput from "../../hooks/use-input";
import logoMain from "../../images/LogoMain.png";
import MainButton from "../Reusable/MainButton";
import PasswordInput from "../Reusable/PasswordInput";
import Notification from "../Notification/Notification";
import { useHistory } from "react-router-dom";
import { callNotification } from "../../store/Notification/notificationActions";
import { useAppDispatch, useAppSelector } from "../../hooks/ts-hooks";
import {
  notificationSelector,
  showNotificationSelector,
} from "../../store/Notification/notificationSelectors";

const ResetPassword = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [passwordReset, setPasswordReset] = useState(false);
  const notification = useAppSelector(notificationSelector);
  const showNotification = useAppSelector(showNotificationSelector);

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

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
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

    try {
      sendRequest();
    } catch (err: any) {
      dispatch(callNotification("error", err.message));
    }
  };

  const goToLoginHandler = () => {
    history.replace("/login");
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler}>
        {!passwordReset && (
          <>
            <h1>Reset password</h1>
            <div className="inputsContainer">
              <PasswordInput
                inputType="password"
                enteredPassword={enteredPassword}
                passwordInputHasError={passwordInputHasError}
                enteredPasswordIsValid={enteredPasswordIsValid}
                passwordChangedHandler={passwordChangedHandler}
                passwordBlurHandler={passwordBlurHandler}
                resetPasswordInput={resetPasswordInput}
                placeholder="New password"
              />
              <PasswordInput
                inputType="password"
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
      <img
        src={logoMain}
        alt="keysee"
        className={classes.mainLogo}
        onClick={goToLoginHandler}
      />

      <Notification
        show={showNotification}
        status={notification.status}
        message={notification.message}
      />
    </div>
  );
};

export default ResetPassword;
