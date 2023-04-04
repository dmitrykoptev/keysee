import React from "react";
import classes from "./StartButton.module.scss";
import SectionBottom from "../Layout/SectionBottom";
import MainButton from "../Reusable/MainButton";
import { fetchTweetsData } from "../../store/Tweets/tweets-actions";
import { loadingTweetsSelector } from "../../store/Tweets/tweets-selectors";
import { useAppDispatch, useAppSelector } from "../../hooks/ts-hooks";

const StartButton = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(loadingTweetsSelector);

  const getTweets = () => {
    dispatch(fetchTweetsData());
  };

  return (
    <SectionBottom>
      <div className={classes.startButton}>
        <MainButton
          title="Start Search"
          onClick={getTweets}
          disabled={isLoading}
        />
      </div>
    </SectionBottom>
  );
};

export default StartButton;
