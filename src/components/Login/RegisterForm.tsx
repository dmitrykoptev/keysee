import { FormEvent } from "react";
import classes from "./AuthForm.module.scss";
import logoMain from "../../images/LogoMain.png";
import useInput from "../../hooks/use-input";
import MainButton from "../Reusable/MainButton";
import PasswordInput from "../Reusable/PasswordInput";
import LoadingSpinner from "../Reusable/LoadingSpinner";
import { useHistory } from "react-router-dom";
import { authActions } from "../../store/Authetication/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/ts-hooks";
import { authFuction } from "../../store/Authetication/authActions";
import {
  authIsLoadingSelector,
  authIsErrorSelector,
} from "../../store/Authetication/authSelectors";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const isError = useAppSelector(authIsErrorSelector);
  const showSpinner = useAppSelector(authIsLoadingSelector);

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    inputFocusHandler: emailFocusHandler,
    reset: resetEmailInput,
  } = useInput(
    (value: string) =>
      value.includes("@") && value.includes(".") && value.trim().length >= 6
  );

  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    isValid: enteredPasswordIsValid,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value: string) => value.trim().length >= 6);

  let formIsValid = false;
  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  let validationError = false;
  if (emailInputHasError || passwordInputHasError) {
    validationError = true;
  }

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const funcType = "register";

    dispatch(authFuction({ funcType, enteredEmail, enteredPassword }));

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
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
    <>
      {!showSpinner ? (
        <div className={classes.container}>
          <form onSubmit={submitHandler}>
            <>
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
                  inputType="password"
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
              {isError && <p className={classes.errorText}>{isError}</p>}
              <MainButton
                title="Sign Up"
                type="submit"
                disabled={!formIsValid}
              />
            </>
          </form>
          <img src={logoMain} alt="keysee" className={classes.mainLogo} />
        </div>
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

export default LoginForm;
