import React from "react";
import classes from "./Key.module.scss";
import { deleteKey } from "../../store/Keys/keysActions";
import { useAppDispatch } from "../../hooks/ts-hooks";

interface IKeyProps {
  id: number;
  keyContent: string;
}

const Key = ({ id, keyContent }: IKeyProps) => {
  const dispatch = useAppDispatch();

  const removeKeyHandler = () => {
    dispatch(deleteKey({ dispatch, id }));
  };

  return (
    <div className={classes.key}>
      <span className={classes.key__text}>{keyContent}</span>
      <span onClick={removeKeyHandler} className={classes.key__delete}></span>
    </div>
  );
};

export default Key;
