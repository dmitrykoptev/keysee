import React from "react";
import classes from "./TwitterAccount.module.scss";
import FollowingButton from "./FollowingButton";

interface ITwitterAccountProps {
  handle: string;
  id: number;
}

const TwitterAccount = ({ handle, id }: ITwitterAccountProps) => {
  const accUrl = `https://twitter.com/${handle}`;

  return (
    <li className={classes.account}>
      <a
        href={accUrl}
        target="_blank"
        rel="noreferrer"
        className={classes.account__handle}
      >
        {handle}
      </a>
      <FollowingButton id={id} />
    </li>
  );
};

export default TwitterAccount;
