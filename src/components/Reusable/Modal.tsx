import React, { ReactNode } from "react";
import classes from "./Modal.module.scss";
import { CSSTransition } from "react-transition-group";
import { modalActions } from "../../store/Modals/modalsSlice";
import { useAppDispatch } from "../../hooks/ts-hooks";

interface IModalProps {
  modalType: string;
  reset?: () => void;
  show: boolean;
  children: ReactNode;
}

const Modal = ({ modalType, reset, show, children }: IModalProps) => {
  const dispatch = useAppDispatch();

  const closeModalHandler = () => {
    if (modalType === "changePassword" || modalType === "changeEmail") {
      reset!();
    }
    dispatch(modalActions.closeModal());
  };

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={show}
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
          <div>{children}</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
