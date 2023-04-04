import React, { useState } from "react";
import classes from "./Tabs.module.scss";
import FollowingsSection from "../Followings/FollowingsSection";
import KeySection from "../Keys/KeySection";
import TweetsSection from "../Tweets/TweetsSection";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const tabs = [
    { label: "Followings", content: <FollowingsSection /> },
    { label: "Tweets", content: <TweetsSection /> },
    { label: "Keys", content: <KeySection /> },
  ];

  return (
    <div>
      <div className={classes.tabButtonsContainer}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={
              activeTab === index
                ? `${classes.tabButton} ${classes[`tabButton--active`]}`
                : `${classes.tabButton}`
            }
          >
            {tab.label}
            <div
              className={
                activeTab === index
                  ? `${classes.underline} ${classes[`underline--active`]}`
                  : `${classes.underline}`
              }
            ></div>
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
