import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainHeader from "./components/Header/MainHeader";
import FollowingsSection from "./components/Followings/FollowingsSection";
import TwitsSection from "./components/Twits/TwitsSection";
import KeySection from "./components/Keys/KeySection";
import { sendKeysData, fetchKeysData } from "./store/keys-actions";
import Notification from "./components/Notification/Notification";

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const keyList = useSelector((state) => state.keyList);
  const notification = useSelector((state) => state.notification.notification);

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

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
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

export default App;
