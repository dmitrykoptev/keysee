import React from "react";
import Content from "../Layout/Content";

import classes from "./FollowingsSection";
import TwitterAccount from "./TwitterAccount";

const FollowingsList = () => {
  return (
    <Content>
      <ul className={classes.followings}>
        <TwitterAccount />
        <TwitterAccount />
        <TwitterAccount />
        <TwitterAccount />
      </ul>
    </Content>
  );
};

export default FollowingsList;
