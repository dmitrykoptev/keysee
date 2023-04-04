import React from "react";
import SectionWrapper from "../Layout/SectionWrapper";
import SectionHeader from "../Layout/SectionHeader";
import Keys from "./Keys";
import StartButton from "./StartButton";

const KeySection = () => {
  return (
    <SectionWrapper>
      <SectionHeader title="Keys" />
      <Keys />
      <StartButton />
    </SectionWrapper>
  );
};

export default KeySection;
