import React, { useEffect } from "react";
import classes from "./MainPage.module.scss";
import MainHeader from "../components/Header/MainHeader";
import FollowingsSection from "../components/Followings/FollowingsSection";
import TweetsSection from "../components/Tweets/TweetsSection";
import KeySection from "../components/Keys/KeySection";
import Notification from "../components/Notification/Notification";
import SmallSpinner from "../components/Reusable/SmallSpinner";
import { fetchKeysData } from "../store/Keys/keys-actions";
import { fetchAccountsData } from "../store/Accounts/accounts-actions";
import { fetchLastResult } from "../store/Tweets/tweets-actions";
import { useAppDispatch, useAppSelector } from "../hooks/ts-hooks";
import { showSpinnerSelector } from "../store/Spinner/spinner-selectors";
import {
  notificationSelector,
  showNotificationSelector,
} from "../store/Notification/notification-selectors";
import Tabs from "../components/Layout/Tabs";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const notification = useAppSelector(notificationSelector);
  const showSpinner = useAppSelector(showSpinnerSelector);
  const showNotification = useAppSelector(showNotificationSelector);

  // *** KEYS ***
  useEffect(() => {
    dispatch(fetchKeysData());
  }, [dispatch]);

  // *** ACCOUNTS ***
  useEffect(() => {
    dispatch(fetchAccountsData());
  }, [dispatch]);

  // *** LAST TWEETS ***
  useEffect(() => {
    dispatch(fetchLastResult());
  }, [dispatch]);

  return (
    <>
      <Notification
        show={showNotification}
        status={notification.status}
        message={notification.message}
      />
      {showSpinner && <SmallSpinner />}
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
