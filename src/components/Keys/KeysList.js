import React from "react";
import { useSelector } from "react-redux";

import classes from "./KeysList.module.css";
import Key from "./Key";

const KeysList = () => {
  const keys = useSelector((state) => state.keyList.items);

  return (
    <ul className={classes.keys__list}>
      {keys.map((key) => (
        <Key key={key.id} id={key.id} title={key.title} />
      ))}
    </ul>
  );
};

export default KeysList;
