import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainHeader from "../components/Header/MainHeader";
import FollowingsSection from "../components/Followings/FollowingsSection";
import TwitsSection from "../components/Twits/TwitsSection";
import KeySection from "../components/Keys/KeySection";
import Notification from "../components/Notification/Notification";
import { sendKeysData, fetchKeysData } from "../store/keys-actions";
import { sendAccountsData, fetchAccountsData } from "../store/accounts-actions";

let isInitial = true;

const MainPage = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification.notification);
  const keyList = useSelector((state) => state.keyList);
  const accountsList = useSelector((state) => state.accountsList);

  // *** KEYS ***
  useEffect(() => {
    dispatch(fetchKeysData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (keyList.changed) {
      dispatch(sendKeysData(keyList));
    }
  }, [keyList, dispatch]);

  // *** ACCOUNTS ***
  useEffect(() => {
    dispatch(fetchAccountsData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (accountsList.changed) {
      dispatch(sendAccountsData(accountsList));
    }
  }, [accountsList, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
        />
      )}
      <MainHeader />
      <main>
        <FollowingsSection />
        <TwitsSection />
        <KeySection />
      </main>
    </>
  );
};

export default MainPage;
