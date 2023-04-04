import React from "react";
import classes from "./FollowingsList.module.scss";
import Content from "../Layout/Content";
import TwitterAccount from "./TwitterAccount";
import { useAppSelector } from "../../hooks/ts-hooks";
import { accountsSelector } from "../../store/Accounts/accounts-selectors";

const FollowingsList = () => {
  const accounts = useAppSelector(accountsSelector);

  return (
    <Content>
      {accounts.length ? (
        <ul className={classes.followings}>
          {accounts.map((item) => (
            <TwitterAccount key={item.id} id={item.id} handle={item.account} />
          ))}
        </ul>
      ) : (
        <p className={classes.noAccounts}>Please add twitter acounts.</p>
      )}
    </Content>
  );
};

export default FollowingsList;
