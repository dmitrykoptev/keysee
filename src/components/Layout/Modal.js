import React from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modals";

import classes from "./Modal.module.css";

const Modal = (props) => {
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(modalActions.closeModal());
  };

  return (
    <div onClick={closeModalHandler} className={classes.backdrop}>
      <div onClick={(e) => e.stopPropagation()} className={classes.modal}>
        <span onClick={closeModalHandler} className={classes.close} />
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
