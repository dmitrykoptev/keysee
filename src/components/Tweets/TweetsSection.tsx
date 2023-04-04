import React from "react";
import SectionHeader from "../Layout/SectionHeader";
import SectionWrapper from "../Layout/SectionWrapper";
import TweetsList from "./TweetsList";

const TweetsSection = () => {
  return (
    <SectionWrapper>
      <SectionHeader title="Tweets" />
      <TweetsList />
    </SectionWrapper>
  );
};

export default TweetsSection;
