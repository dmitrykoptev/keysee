import React from "react";
import classes from "./TweetsList.module.scss";
import Content from "../Layout/Content";
import Tweet from "./Tweet";
import LoadingSpinner from "../Reusable/LoadingSpinner";
import { useAppSelector } from "../../hooks/ts-hooks";
import {
  loadingTweetsSelector,
  tweetsSelector,
} from "../../store/Tweets/tweetsSelectors";

const TweetsList = () => {
  const tweets = useAppSelector(tweetsSelector);
  const isLoading = useAppSelector(loadingTweetsSelector);

  let listContent;
  if (isLoading) {
    listContent = (
      <div className={classes.loading}>
        <LoadingSpinner />
        <p>Please wait. It could take some time.</p>
      </div>
    );
  }
  if ((!tweets || tweets?.length === 0) && !isLoading) {
    listContent = (
      <p className={classes.noAccounts}>Please add twitter accounts & keys.</p>
    );
  }
  if (tweets?.length > 0 && !isLoading) {
    listContent = (
      <ul className={classes.tweetsList}>
        {tweets.map((item) => (
          <li key={item.url}>
            <Tweet {...item} />
          </li>
        ))}
      </ul>
    );
  }

  return <Content>{listContent}</Content>;
};

export default TweetsList;
