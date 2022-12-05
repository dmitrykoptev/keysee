import React from "react";

import classes from "./TwitsList.module.css";
import Content from "../Layout/Content";
import TwitterPost from "./TwitterPost";

const TwitsList = () => {
  return (
    <Content>
      <ul className={classes.twits__list}>
        <TwitterPost />
        <TwitterPost />
        <TwitterPost />
        <TwitterPost />
        <TwitterPost />
        <TwitterPost />
        <TwitterPost />
        <TwitterPost />
        <TwitterPost />
        <TwitterPost />
        <TwitterPost />
        <TwitterPost />
        <TwitterPost />
        <TwitterPost />
        <TwitterPost />
        <TwitterPost />
      </ul>
    </Content>
  );
};

export default TwitsList;
