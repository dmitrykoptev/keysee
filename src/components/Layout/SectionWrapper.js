import React from "react";

import classes from "./SectionWrapper.module.css";

const SectionWrapper = (props) => {
  return <section className={classes.sectionWrapper}>{props.children}</section>;
};

export default SectionWrapper;
