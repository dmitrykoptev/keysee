import React from "react";
import classes from "./LogoutModal.module.scss";
import { useAppDispatch } from "../../../hooks/ts-hooks";
import { authActions } from "../../../store/Authetication/auth";
import { modalActions } from "../../../store/Modals/modals";
import MainButton from "../../Reusable/MainButton";
import Modal from "../../Reusable/Modal";

interface ILogoutModalProps {
  show: boolean;
}

const LogoutModal = ({ show }: ILogoutModalProps) => {
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    dispatch(modalActions.closeModal());
    dispatch(authActions.logOut());
  };

  return (
    <Modal modalType="logout" show={show}>
      <div className={classes.container}>
        <span className={classes.title}>Do you want to log out?</span>
        <MainButton title="Log Out" onClick={logoutHandler} />
      </div>
    </Modal>
  );
};

export default LogoutModal;
