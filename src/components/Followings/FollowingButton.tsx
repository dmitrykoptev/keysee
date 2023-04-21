import React from "react";
import classes from "./FollowingButton.module.scss";
import { deleteAccount } from "../../store/Accounts/accountsActions";
import { useAppDispatch } from "../../hooks/ts-hooks";

interface IFollowingButtonProps {
  id: number;
}

const FollowingButton = ({ id }: IFollowingButtonProps) => {
  const dispatch = useAppDispatch();

  const buttonClickHandler = () => {
    dispatch(deleteAccount({ dispatch, id }));
  };

  return (
    <button
      onClick={buttonClickHandler}
      className={classes.btnUnfollow}
    ></button>
  );
};

export default FollowingButton;
