import React from "react";
import { useDispatch } from "react-redux";
import { accountsActions } from "../../store/accounts";

import classes from "./FollowingButton.module.css";

const FollowingButton = (props) => {
  const dispatch = useDispatch();

  const buttonClickHandler = () => {
    const id = props.id;
    dispatch(accountsActions.removeAccount(id));
    console.log(id);
  };

  return (
    <button
      onClick={buttonClickHandler}
      className={classes.btn__unfollow}
    ></button>
  );
};

export default FollowingButton;
