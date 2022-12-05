import React from "react";
import SectionHeader from "../Layout/SectionHeader";
import SectionWrapper from "../Layout/SectionWrapper";
import TwitsList from "./TwitsList";

const TwitsSection = () => {
  return (
    <SectionWrapper>
      <SectionHeader title="Twits" />
      <TwitsList />
    </SectionWrapper>
  );
};

export default TwitsSection;
