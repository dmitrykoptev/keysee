import React from "react";
import classes from "./Keys.module.scss";
import Content from "../Layout/Content";
import KeysList from "./KeysList";
import KeyInput from "./KeyInput";
import { keysListSelector } from "../../store/Keys/keysSelectors";
import { useAppSelector } from "../../hooks/ts-hooks";

const Keys = () => {
  const keys = useAppSelector(keysListSelector);

  return (
    <Content>
      <KeyInput />
      {keys.length ? (
        <KeysList />
      ) : (
        <p className={classes.noKeys}>Please add keys.</p>
      )}
    </Content>
  );
};

export default Keys;
