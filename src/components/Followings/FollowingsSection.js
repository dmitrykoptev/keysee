import React from "react";

import AddTwitter from "./AddTwitter";
import SectionWrapper from "../Layout/SectionWrapper";
import SectionHeader from "../Layout/SectionHeader";
import FollowingsList from "./FollowingsList";

const FollowingsSection = () => {
  return (
    <SectionWrapper>
      <SectionHeader title="My followings" />
      <FollowingsList />
      <AddTwitter />
    </SectionWrapper>
  );
};

export default FollowingsSection;
