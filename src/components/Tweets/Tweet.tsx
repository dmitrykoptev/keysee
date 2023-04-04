import React from "react";
import classes from "./Tweet.module.scss";
import { ITweet } from "../../models/tweet";

const Tweet = ({
  date,
  profile_image_url,
  display_name,
  username,
  url,
  content,
}: ITweet) => {
  let tweetDate;
  if (date) {
    tweetDate = date.split(", ").pop()!.split(" 2023")[0];
  }

  return (
    <div className={classes.tweet}>
      <div>
        <img
          src={profile_image_url}
          alt="Avatar"
          className={classes.tweet__avatar}
        />
      </div>
      <div className={classes.tweet__content}>
        <div className={classes.tweetInfo}>
          <span className={classes.tweetInfo__name}>{display_name}</span>
          <span className={classes.tweetInfo__handle}>@{username}</span>
          <span className={classes.tweetInfo__handle}>&bull; </span>
          <span className={classes.tweetInfo__handle}>{tweetDate}</span>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={classes.visitOriginal}
          >
            {" "}
          </a>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Tweet;
