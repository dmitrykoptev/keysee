import React, { useState } from "react";

import classes from "../Login/AuthForm.module.css";
import logoMain from "../../images/LogoMain.png";
import useInput from "../../hooks/use-input";
import MainButton from "../Reusable/MainButton";
import { useHistory } from "react-router-dom";

const EmailForm = () => {
  const history = useHistory();
  const [emailSent, setEmailSent] = useState(false);

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

  const formIsValid = enteredEmailIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    const sendRequest = async () => {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBD3lPiWWjbfHBAvg0UlC2IOXOzKqlhSTY",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: enteredEmail,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong ...");
      }

      document.activeElement.blur();
      resetEmailInput();
      setEmailSent(true);
      setTimeout(() => {
        setEmailSent(false);
        history.replace("/login");
      }, 5000);
    };

    sendRequest().catch((err) => console.log(err.message));
  };

  const emailInputClasses = emailInputHasError
    ? `formInput wrongCredentials`
    : `formInput`;

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler} className={classes.loginForm}>
        {!emailSent && (
          <>
            <h1>Reset password</h1>
            <div className="inputsContainer">
              <input
                type="email"
                placeholder="Email"
                className={emailInputClasses}
                value={enteredEmail}
                onChange={emailChangedHandler}
                onBlur={emailBlurHandler}
                onFocus={emailFocusHandler}
              />
            </div>
            <MainButton
              title="Send email"
              type="submit"
              disabled={!formIsValid}
            />
          </>
        )}
        {emailSent && (
          <span className={classes.sucessReg}>
            The password reset link was just sent to your email. <br />
            You can find it there!
          </span>
        )}
      </form>
      <img src={logoMain} alt="keysee" className={classes.mainLogo} />
    </div>
  );
};

export default EmailForm;
