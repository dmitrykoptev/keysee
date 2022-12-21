import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../../hooks/use-input";
import { modalActions } from "../../../store/modals";
import { notificationActions } from "../../../store/notification";
import MainButton from "../../Reusable/MainButton";
import Modal from "../../Reusable/Modal";
import PasswordInput from "../../Reusable/PasswordInput";

import classes from "./ChangePasswordModal.module.css";

const ChangePasswordModal = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const {
    value: enteredPasswordOld,
    hasError: passwordInputHasErrorOld,
    isValid: enteredPasswordIsValidOld,
    valueChangeHandler: passwordChangedHandlerOld,
    inputBlurHandler: passwordBlurHandlerOld,
    reset: resetPasswordInputOld,
  } = useInput((value) => value.trim().length >= 6);

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
  if (
    passwordInputHasErrorOld ||
    passwordInputHasError ||
    passwordInputHasErrorRepeat
  ) {
    validationError = true;
  }

  let formIsValid = false;
  if (enteredPasswordIsValid && enteredPassword === enteredPasswordRepeat) {
    formIsValid = true;
  }

  // ПРИ РЕНДЕРЕ МОДАЛКИ ЗАПУСКАЕТСЯ ФУНКЦИЯ, КОТОРАЯ ЗАПРАШИВАЕТ ИЗ БД ТЕКУЩИЙ ПАРОЛЬ ПОЛЬЗОВАТЕЛЯ
  // И СОХРАНЯЕТ ЕГО В ПЕРЕМЕННОЙ
  // ЭТА ПЕРЕМЕННАЯ СРАВНИВАЕТСЯ С enteredPasswordOld И РЕЗУЛЬТАТ ЭТОГО СРАВНЕНИЯ СОХРАНЯЕТСЯ В ДРУГОЙ ПЕРЕМЕННОЙ
  // КОТОРАЯ В СВОЮ ОЧЕРЕДЬ ИСПОЛЬЗУЕТСЯ ПРИ ВАЛИДАЦИИ formIsValid

  const submitHandler = (event) => {
    event.preventDefault();

    const sendRequest = async () => {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBD3lPiWWjbfHBAvg0UlC2IOXOzKqlhSTY",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: token,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      dispatch(modalActions.closeModal());
      dispatch(
        notificationActions.showNotification({
          status: "success",
          message: "Your password was changed successfully!",
        })
      );
      setTimeout(() => {
        dispatch(notificationActions.hideNotification());
      }, 1500);
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
      }, 1500);
    });
  };

  return (
    <Modal>
      <div className={classes.container}>
        <span className={classes.title}>Change password</span>
        <form onSubmit={submitHandler}>
          <div className="inputsContainer">
            <PasswordInput
              enteredPassword={enteredPasswordOld}
              passwordInputHasError={passwordInputHasErrorOld}
              enteredPasswordIsValid={enteredPasswordIsValidOld}
              passwordChangedHandler={passwordChangedHandlerOld}
              passwordBlurHandler={passwordBlurHandlerOld}
              resetPasswordInput={resetPasswordInputOld}
              placeholder="Old password"
            />
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
              placeholder="New password"
            />
          </div>
          {validationError && (
            <span className={classes.errorText}>
              Password can't be less then 6 symbols.
            </span>
          )}
          <MainButton title="Confirm" type="submit" disabled={!formIsValid} />
        </form>
      </div>
    </Modal>
  );
};

export default ChangePasswordModal;
