import React from "react";

import classes from "./SectionBottom.module.css";

const SectionBottom = (props) => {
  return <div className={classes.sectionBottom}>{props.children}</div>;
};

export default SectionBottom;
