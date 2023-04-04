import { authActions } from "./auth";
import { spinnerActions } from "../Spinner/spinner";
import { AppDispatch } from "../store";

interface ILoginFunctionProps {
  enteredEmail: string;
  enteredPassword: string;
  rememberMe: boolean;
  logoutHandler: () => void;
}

export const loginFunction = ({
  enteredEmail,
  enteredPassword,
  rememberMe,
  logoutHandler,
}: ILoginFunctionProps) => {
  return async (dispatch: AppDispatch) => {
    const sendRequest = async () => {
      dispatch(spinnerActions.showSpinner());
      const response = await fetch("/api/v1/login", {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(spinnerActions.hideSpinner());

      if (!response.ok) {
        throw new Error("Email or password was wrong");
      }

      const data = await response.json();
      return data;
    };

    try {
      const data = await sendRequest();
      dispatch(authActions.logIn(data.access_token));

      if (!rememberMe) {
        setTimeout(logoutHandler, 7200000);
      } else if (rememberMe) {
        setTimeout(logoutHandler, 604800000);
      }
    } catch (err: any) {
      dispatch(authActions.showError(err.message));
    }
  };
};

interface ISignupFunctionProps {
  enteredEmail: string;
  enteredPassword: string;
  setRegComplete: (x: boolean) => void;
}

export const signupFunction = ({
  enteredEmail,
  enteredPassword,
  setRegComplete,
}: ISignupFunctionProps) => {
  return async (dispatch: AppDispatch) => {
    const sendRequest = async () => {
      dispatch(spinnerActions.showSpinner());
      const response = await fetch("/api/v1/register", {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(spinnerActions.hideSpinner());

      if (!response.ok) {
        throw new Error("This email already exists");
      }

      const data = await response.json();
      return data;
    };

    try {
      const data = await sendRequest();
      setRegComplete(true);
      setTimeout(() => {
        setRegComplete(false);
        dispatch(authActions.logIn(data.access_token));
      }, 2000);
    } catch (err: any) {
      dispatch(authActions.showError(err.message));
    }
  };
};
