import React from "react";

import classes from "./TwitterAccount.module.css";
import userImg from "../../images/Photo.png";
import FollowingButton from "./FollowingButton";

const TwitterAccount = (props) => {
  return (
    <li className={classes.twitter__account}>
      <div className={classes.twitter__info}>
        <img src={userImg} alt="Avatar" className={classes.user__avatar} />
        <div className={classes.twitter__text}>
          <a
            href={props.accUrl}
            target="_blank"
            rel="noreferrer"
            className={classes.twitter__handle}
          >
            {props.handle}
          </a>
        </div>
      </div>
      <FollowingButton id={props.id} />
    </li>
  );
};

export default TwitterAccount;
