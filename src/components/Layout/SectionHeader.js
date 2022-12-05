import React from "react";

import classes from "./SectionHeader.module.css";

const SectionHeader = (props) => {
  return (
    <div className={classes.sectionHeader}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default SectionHeader;
