import React from "react";

import classes from "./TwitsList.module.css";
import Content from "../Layout/Content";
import TwitterPost from "./TwitterPost";
import LoadingSpinner from "../Reusable/LoadingSpinner";

const TwitsList = () => {
  let noTwits = true;
  let loading = false;
  let listContent;
  if (loading) {
    listContent = (
      <div className={classes.loading}>
        <LoadingSpinner />
        <p>Please wait. It could take some time.</p>
      </div>
    );
  }
  if (noTwits) {
    listContent = (
      <p className={classes.noAccounts}>Please add twitter acounts.</p>
    );
  }
  if (!noTwits && !loading) {
    listContent = (
      <ul className={classes.twits__list}>
        <TwitterPost />
      </ul>
    );
  }

  return <Content>{listContent}</Content>;
};

export default TwitsList;
