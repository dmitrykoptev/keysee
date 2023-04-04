import React from "react";
import classes from "./SectionHeader.module.scss";

interface ISectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: ISectionHeaderProps) => {
  return (
    <div className={classes.sectionHeader}>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeader;
