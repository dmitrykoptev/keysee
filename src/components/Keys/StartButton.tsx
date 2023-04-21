import classes from "./StartButton.module.scss";
import SectionBottom from "../Layout/SectionBottom";
import MainButton from "../Reusable/MainButton";
import { loadingTweetsSelector } from "../../store/Tweets/tweetsSelectors";
import { useAppDispatch, useAppSelector } from "../../hooks/ts-hooks";
import { fetchTweets } from "../../store/Tweets/tweetsActions";

const StartButton = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(loadingTweetsSelector);

  const getTweets = () => {
    dispatch(fetchTweets(dispatch));
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
