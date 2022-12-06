import React from "react";
import { useSelector } from "react-redux";

import classes from "./Keys.module.css";
import Content from "../Layout/Content";
import KeysList from "./KeysList";
import KeyInput from "./KeyInput";

const Keys = () => {
  const keys = useSelector((state) => state.keyList.items);

  return (
    <Content>
      <KeyInput />
      {keys.length ? (
        <KeysList keys={keys} />
      ) : (
        <p className={classes.noKeys}>Please add keys.</p>
      )}
    </Content>
  );
};

export default Keys;
