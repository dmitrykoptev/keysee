import React from "react";

import classes from "./TwitterAccount.module.css";
import userImg from "../../images/Photo.png";
import FollowingButton from "./FollowingButton";

const user = {
  id: "u1",
  name: "Ivan Perzhy",
  handle: "@perdezh",
  image: userImg,
  link: "",
};

const TwitterAccount = () => {
  return (
    <li className={classes.twitter__account}>
      <div className={classes.twitter__info}>
        <img src={user.image} alt="Avatar" className={classes.user__avatar} />
        <div className={classes.twitter__text}>
          <span className={classes.twitter__name}>{user.name}</span>
          <span className={classes.twitter__handle}>{user.handle}</span>
        </div>
      </div>
      <FollowingButton />
    </li>
  );
};

export default TwitterAccount;
