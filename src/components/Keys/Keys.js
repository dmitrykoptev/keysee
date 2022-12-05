import React from "react";

import Content from "../Layout/Content";
import KeysList from "./KeysList";
import KeyInput from "./KeyInput";

const Keys = () => {
  return (
    <Content>
      <KeyInput />
      <KeysList />
    </Content>
  );
};

export default Keys;
