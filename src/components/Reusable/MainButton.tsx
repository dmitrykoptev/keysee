import React from "react";
import classes from "./MainButton.module.scss";

interface IMainButtonProps {
  title: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: string;
}

const MainButton = ({ title, disabled, onClick }: IMainButtonProps) => {
  return (
    <button
      className={classes.mainButton}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default MainButton;
