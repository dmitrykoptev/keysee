import React from "react";
import classes from "./StartButton.module.css";
import SectionBottom from "../Layout/SectionBottom";
import MainButton from "../Reusable/MainButton";

const StartButton = () => {
  return (
    <SectionBottom>
      <div className={classes.startButton}>
        <MainButton title="Start Search" />
      </div>
    </SectionBottom>
  );
};

export default StartButton;
