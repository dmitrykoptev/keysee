import React from "react";

import classes from "./TwitterPost.module.css";
import logo from "../../images/Photo.png";

const post = {
  id: "p1",
  image: logo,
  name: "Ivan Perzhu",
  handle: "@perdezh",
  timeAgo: "4 h",
  content:
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
  link: "",
};

const TwitterPost = () => {
  return (
    <li className={classes.twit_post}>
      <div>
        <img
          src={post.image}
          alt="Account avatar"
          className={classes.user__avatar}
        />
      </div>
      <div className={classes.twit__text_content}>
        <div className={classes.twit__post_info}>
          <span className={classes.twitter__name}>{post.name}</span>
          <span className={classes.twitter__handle}>{post.handle}</span>
          <span className={classes.twitter__handle}>&bull; {post.timeAgo}</span>
        </div>
        <div className={classes.twit__post_content}>{post.content}</div>
      </div>
    </li>
  );
};

export default TwitterPost;
