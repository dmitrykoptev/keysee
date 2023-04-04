import React from "react";
import FollowingInput from "./FollowingInput";
import SectionWrapper from "../Layout/SectionWrapper";
import SectionHeader from "../Layout/SectionHeader";
import FollowingsList from "./FollowingsList";

const FollowingsSection = () => {
  return (
    <SectionWrapper>
      <SectionHeader title="My followings" />
      <FollowingsList />
      <FollowingInput />
    </SectionWrapper>
  );
};

export default FollowingsSection;
