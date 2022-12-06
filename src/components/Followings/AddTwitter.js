import React, { useRef } from "react";

import classes from "./AddTwitter.module.css";
import SectionBottom from "../Layout/SectionBottom";
import { useDispatch } from "react-redux";
import { accountsActions } from "../../store/accounts";

const AddTwitter = () => {
  const inputEl = useRef();
  const dispatch = useDispatch();

  const reset = () => {
    inputEl.current.value = "";
    inputEl.current.blur();
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const inputValue = inputEl.current.value;

    if (inputValue.trim().length >= 3 && inputValue.includes("@")) {
      const id = Date.now().toString();
      const inputHandle = inputValue.split(" ").join("");
      dispatch(
        accountsActions.addAccount({
          id: id,
          handle: inputHandle,
        })
      );
    }

    reset();
  };

  return (
    <SectionBottom>
      <form onSubmit={formSubmitHandler} className={classes.add__followings}>
        <input type="text" placeholder="@twitterhandle" ref={inputEl} />
        <button className={classes.btn__add}>Add</button>
      </form>
    </SectionBottom>
  );
};

export default AddTwitter;
