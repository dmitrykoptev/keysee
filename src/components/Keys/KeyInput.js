import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { keysAction } from "../../store/keys";

import classes from "./KeyInput.module.css";

const KeyInput = () => {
  const dispatch = useDispatch();
  const inputEl = useRef(null);

  const addKeyHandler = (event) => {
    event.preventDefault();

    const keyId = Math.trunc(Math.random() * 1000);
    const keyContent = inputEl.current.value;
    if (keyContent.trim() !== "") {
      dispatch(keysAction.addKey({ id: keyId, title: keyContent }));
    } else {
      console.log("Хуйню ввел!");
    }
    inputEl.current.value = "";
    inputEl.current.blur();
  };

  return (
    <form onSubmit={addKeyHandler} className={classes.add__keys}>
      <input ref={inputEl} type="text" placeholder="Add keys" />
    </form>
  );
};

export default KeyInput;
