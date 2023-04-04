import React, { ReactNode } from "react";
import classes from "./SectionWrapper.module.scss";

interface ISectionWrapperProps {
  children: ReactNode;
}

const SectionWrapper = (props: ISectionWrapperProps) => {
  return <section className={classes.sectionWrapper}>{props.children}</section>;
};

export default SectionWrapper;
