import React from "react";
import classes from "./KeysList.module.scss";
import Key from "./Key";
import { keysSelector } from "../../store/Keys/keys-selectors";
import { useAppSelector } from "../../hooks/ts-hooks";

const KeysList = () => {
  const keys = useAppSelector(keysSelector);

  return (
    <ul className={classes.keysList}>
      {keys.map((keyItem) => (
        <li key={keyItem.id}>
          <Key id={keyItem.id} keyContent={keyItem.key} />
        </li>
      ))}
    </ul>
  );
};

export default KeysList;
