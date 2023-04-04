import React, { ReactNode } from "react";
import classes from "./SectionBottom.module.scss";

interface ISectionBottomProps {
  children: ReactNode;
}

const SectionBottom = (props: ISectionBottomProps) => {
  return <div className={classes.sectionBottom}>{props.children}</div>;
};

export default SectionBottom;
