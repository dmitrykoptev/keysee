import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";

const useInput = (validateValue) => {
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.auth.error);

  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
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
