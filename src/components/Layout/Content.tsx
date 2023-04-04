import React, { ReactNode } from "react";
import classes from "./Content.module.scss";

interface IContentProps {
  children: ReactNode;
}

const Content = (props: IContentProps) => {
  return <div className={classes.content}>{props.children}</div>;
};

export default Content;
