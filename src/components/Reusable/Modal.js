import React from "react";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { modalActions } from "../../store/modals";

import classes from "./Modal.module.css";

const Modal = (props) => {
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    if (props.modalType === "changePassword") {
      props.reset();
    }
    dispatch(modalActions.closeModal());
  };

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={300}
      classNames={{
        enter: "",
        enterActive: classes.openModal,
        exit: "",
        exitActive: classes.closeModal,
      }}
    >
      <div onClick={closeModalHandler} className={classes.backdrop}>
        <div onClick={(e) => e.stopPropagation()} className={classes.modal}>
          <span onClick={closeModalHandler} className={classes.close} />
          <div>{props.children}</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
