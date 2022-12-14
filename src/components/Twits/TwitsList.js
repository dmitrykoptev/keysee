import React from "react";

import classes from "./TwitsList.module.css";
import Content from "../Layout/Content";
import TwitterPost from "./TwitterPost";

const TwitsList = () => {
  let noTwits = false;

  return (
    <Content>
      {noTwits ? (
        <ul className={classes.twits__list}>
          <TwitterPost />
        </ul>
      ) : (
        <p className={classes.noAccounts}>Please add twitter acounts.</p>
      )}
    </Content>
  );
};

export default TwitsList;
