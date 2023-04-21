import React, { FormEvent, useRef } from "react";
import classes from "./KeyInput.module.scss";
import { addKey } from "../../store/Keys/keysActions";
import { callNotification } from "../../store/Notification/notificationActions";
import { keysListSelector } from "../../store/Keys/keysSelectors";
import { useAppDispatch, useAppSelector } from "../../hooks/ts-hooks";

const KeyInput = () => {
  const dispatch = useAppDispatch();
  const keys = useAppSelector(keysListSelector);
  const inputEl = useRef<HTMLInputElement>(null);

  const reset = () => {
    if (inputEl.current) {
      inputEl.current.value = "";
      inputEl.current.blur();
    }
  };

  const addKeyHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputValue = inputEl.current!.value;
    const inputKey = inputValue.trim().split(" ").join("");

    if (keys.some((el) => el.key === inputKey)) {
      dispatch(callNotification("error", "You already have this key."));
      reset();
      return;
    }
    if (keys.length >= 10) {
      dispatch(callNotification("error", "You can add up to 10 keys."));
      reset();
      return;
    }
    if (inputKey !== "") {
      dispatch(addKey({ dispatch, inputKey }));
      reset();
    }

    reset();
  };

  return (
    <form onSubmit={addKeyHandler} className={classes.keyForm}>
      <input ref={inputEl} type="text" placeholder="Add keys" />
    </form>
  );
};

export default KeyInput;
