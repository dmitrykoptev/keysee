import { ChangeEvent, useState } from "react";
import { authActions } from "../store/Authetication/authSlice";
import { useAppDispatch } from "./ts-hooks";

const useInput = (validateValue: (x: string) => boolean) => {
  const dispatch = useAppDispatch();

  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const inputFocusHandler = () => {
    dispatch(authActions.removeError());
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    inputFocusHandler,
    reset,
  };
};

export default useInput;
