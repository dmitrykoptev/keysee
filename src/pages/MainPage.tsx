import React, { useEffect } from "react";
import classes from "./MainPage.module.scss";
import MainHeader from "../components/Header/MainHeader";
import FollowingsSection from "../components/Followings/FollowingsSection";
import TweetsSection from "../components/Tweets/TweetsSection";
import KeySection from "../components/Keys/KeySection";
import Notification from "../components/Notification/Notification";
import SmallSpinner from "../components/Reusable/SmallSpinner";
import { fetchLastResult } from "../store/Tweets/tweetsActions";
import { useAppDispatch, useAppSelector } from "../hooks/ts-hooks";
import {
  notificationSelector,
  showNotificationSelector,
} from "../store/Notification/notificationSelectors";
import Tabs from "../components/Layout/Tabs";
import { fetchKeys } from "../store/Keys/keysActions";
import { keysIsLoadingSelector } from "../store/Keys/keysSelectors";
import { fetchAccounts } from "../store/Accounts/accountsActions";
import { accountsIsLoadingSelector } from "../store/Accounts/accountsSelectors";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const notification = useAppSelector(notificationSelector);
  // добавить селекторы для всех остальных редьюсеров, которые дергают малый спиннер
  // и вывести в одну переменную
  const keysLoading = useAppSelector(keysIsLoadingSelector);
  const accountsLoading = useAppSelector(accountsIsLoadingSelector);
  const showNotification = useAppSelector(showNotificationSelector);

  let showLoading = keysLoading || accountsLoading;

  // *** KEYS ***
  useEffect(() => {
    dispatch(fetchKeys(dispatch));
  }, [dispatch]);

  // *** ACCOUNTS ***
  useEffect(() => {
    dispatch(fetchAccounts(dispatch));
  }, [dispatch]);

  // *** LAST TWEETS ***
  useEffect(() => {
    dispatch(fetchLastResult(dispatch));
  }, [dispatch]);

  return (
    <>
      <Notification
        show={showNotification}
        status={notification.status}
        message={notification.message}
      />
      {showLoading && <SmallSpinner />}
      <MainHeader />
      <main>
        <div className={classes.bigScreen}>
          <FollowingsSection />
          <TweetsSection />
          <KeySection />
        </div>
        <div className={classes.smallScreen}>
          <Tabs />
        </div>
      </main>
    </>
  );
};

export default MainPage;
