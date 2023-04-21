import React, { FormEvent } from "react";
import classes from "./ChangePasswordModal.module.scss";
import useInput from "../../../../../ts-keysee/src/hooks/use-input";
import { useAppDispatch } from "../../../../../ts-keysee/src/hooks/ts-hooks";
import { modalActions } from "../../../store/Modals/modalsSlice";
import { callNotification } from "../../../store/Notification/notificationActions";
import MainButton from "../../../../../ts-keysee/src/components/Reusable/MainButton";
import Modal from "../../../../../ts-keysee/src/components/Reusable/Modal";
import EmailInput from "../../../../../ts-keysee/src/components/Reusable/PasswordInput";

interface IChangeEmailModalProps {
  show: boolean;
}

const ChangeEmailModal = ({ show }: IChangeEmailModalProps) => {
  const dispatch = useAppDispatch();

  let {
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

  let {
    value: enteredEmailRepeat,
    hasError: emailInputHasErrorRepeat,
    isValid: enteredEmailIsValidRepeat,
    valueChangeHandler: emailChangedHandlerRepeat,
    inputBlurHandler: emailBlurHandlerRepeat,
    reset: resetEmailInputRepeat,
  } = useInput(
    (value) =>
      value.includes("@") && value.includes(".") && value.trim().length >= 6
  );

  const resetForm = () => {
    resetEmailInput();
    resetEmailInputRepeat();
  };

  let validationError;
  if (emailInputHasError || emailInputHasErrorRepeat) {
    validationError = true;
  }

  let formIsValid = false;
  if (enteredEmailIsValid && enteredEmail === enteredEmailRepeat) {
    formIsValid = true;
  }

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const sendRequest = async () => {
      const response = await fetch("api/v1/edit_profile", {
        method: "PUT",
        body: JSON.stringify({
          email: enteredEmail,
        }),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      resetEmailInput();
      resetEmailInputRepeat();

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      dispatch(modalActions.closeModal());
      dispatch(
        callNotification("success", "Your email has been changed successfully!")
      );
    };

    try {
      sendRequest();
    } catch (err: any) {
      dispatch(callNotification("error", err.message));
    }
  };

  return (
    <Modal modalType="changeEmail" reset={resetForm} show={show}>
      <div className={classes.container}>
        <div className={classes.title}>Change email</div>
        <form onSubmit={submitHandler}>
          <div className="inputsContainer">
            <EmailInput
              inputType="email"
              enteredEmail={enteredEmail}
              emailInputHasError={emailInputHasError}
              enteredEmailIsValid={enteredEmailIsValid}
              emailChangedHandler={emailChangedHandler}
              emailBlurHandler={emailBlurHandler}
              resetEmailInput={resetEmailInput}
              placeholder="New email"
            />
            <EmailInput
              inputType="email"
              enteredEmail={enteredEmailRepeat}
              emailInputHasError={emailInputHasErrorRepeat}
              enteredEmailIsValid={enteredEmailIsValidRepeat}
              emailChangedHandler={emailChangedHandlerRepeat}
              emailBlurHandler={emailBlurHandlerRepeat}
              resetEmailInput={resetEmailInputRepeat}
              placeholder="Repeat email"
            />
          </div>
          {validationError && (
            <div className={classes.errorText}>Enter correct email please.</div>
          )}
          <MainButton title="Confirm" type="submit" disabled={!formIsValid} />
        </form>
      </div>
    </Modal>
  );
};

export default ChangeEmailModal;
