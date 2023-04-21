import React, { FormEvent, useRef } from "react";
import classes from "./FollowingInput.module.scss";
import SectionBottom from "../Layout/SectionBottom";
import { addAccount } from "../../store/Accounts/accountsActions";
import { callNotification } from "../../store/Notification/notificationActions";
import { accountsListSelector } from "../../store/Accounts/accountsSelectors";
import { useAppDispatch, useAppSelector } from "../../hooks/ts-hooks";

const AddTwitter = () => {
  const dispatch = useAppDispatch();
  const accounts = useAppSelector(accountsListSelector);
  const inputEl = useRef<HTMLInputElement>(null);

  const reset = () => {
    if (inputEl.current) {
      inputEl.current.value = "";
      inputEl.current.blur();
    }
  };

  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputValue = inputEl.current!.value;
    const inputHandle = inputValue.trim().split(" ").join("");

    if (accounts.some((el) => el.account === inputHandle)) {
      dispatch(callNotification("error", "You already have this account."));
      reset();
      return;
    }
    if (accounts.length >= 50) {
      dispatch(callNotification("error", "You can add up to 50 accounts."));
      reset();
      return;
    } else if (inputHandle.trim().length < 3 || !inputHandle.includes("@")) {
      dispatch(
        callNotification(
          "error",
          `Handle should start with "@" and can't be less then 3 symbols`
        )
      );
    } else {
      dispatch(addAccount({ dispatch, inputHandle }));
    }

    reset();
  };

  return (
    <SectionBottom>
      <form onSubmit={formSubmitHandler} className={classes.followingForm}>
        <input type="text" placeholder="@twitterhandle" ref={inputEl} />
        <button className={classes.followingForm__button}>Add</button>
      </form>
    </SectionBottom>
  );
};

export default AddTwitter;
