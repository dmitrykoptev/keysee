import React from "react";
import classes from "./LogoutModal.module.scss";
import { useAppDispatch } from "../../../hooks/ts-hooks";
import { modalActions } from "../../../store/Modals/modalsSlice";
import MainButton from "../../Reusable/MainButton";
import Modal from "../../Reusable/Modal";

interface IMessageModalProps {
  show: boolean;
}

const MessageModal = ({ show }: IMessageModalProps) => {
  const dispatch = useAppDispatch();
  const closeHandler = () => {
    dispatch(modalActions.closeModal());
  };

  return (
    <Modal modalType="logout" show={show}>
      <div className={classes.container}>
        <div className={classes.title}>Oops!</div>
        <div className={classes.message}>
          We're sorry, but this function doesn't work right now. <br /> The team
          is doing their best to make it work back again.
        </div>
        <MainButton title="Got it" onClick={closeHandler} />
      </div>
    </Modal>
  );
};

export default MessageModal;
