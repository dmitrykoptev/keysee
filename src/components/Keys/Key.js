import React from "react";

import classes from "./Key.module.css";
import { IoClose } from "react-icons/io5";
import { keysAction } from "../../store/keys";
import { useDispatch } from "react-redux";

const Key = (props) => {
  const dispatch = useDispatch();

  const removeKeyHandler = () => {
    dispatch(keysAction.removeKey(props.id));
  };

  return (
    <li className={classes.key}>
      <span className={classes.key__text}>{props.title}</span>
      <IoClose onClick={removeKeyHandler} className={classes.key__delete} />
    </li>
  );
};

export default Key;
