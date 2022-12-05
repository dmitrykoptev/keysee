import React from "react";
import classes from "./StartButton.module.css";
import SectionBottom from "../Layout/SectionBottom";

const StartButton = () => {
  return (
    <SectionBottom>
      <div className={classes.startButton}>
        <button>Let’s goooo mathafaka</button>
      </div>
    </SectionBottom>
  );
};

export default StartButton;
