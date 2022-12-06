import React from "react";
import { useSelector } from "react-redux";
import Content from "../Layout/Content";

import classes from "./FollowingsSection.module.css";
import TwitterAccount from "./TwitterAccount";

const FollowingsList = () => {
  const accounts = useSelector((state) => state.accountsList.items);

  return (
    <Content>
      {accounts.length ? (
        <ul className={classes.followings}>
          {accounts.map((account) => (
            <TwitterAccount
              key={account.id}
              id={account.id}
              handle={account.handle}
              accUrl={account.accUrl}
            />
          ))}
        </ul>
      ) : (
        <p className={classes.noAccounts}>Please add twitter acounts.</p>
      )}
    </Content>
  );
};

export default FollowingsList;
