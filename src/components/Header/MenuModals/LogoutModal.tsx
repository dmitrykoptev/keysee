import React from "react";
import classes from "./LogoutModal.module.scss";
import { useAppDispatch } from "../../../../../ts-keysee/src/hooks/ts-hooks";
import { authActions } from "../../../../../ts-keysee/src/store/Authetication/authSlice";
import { modalActions } from "../../../store/Modals/modalsSlice";
import MainButton from "../../../../../ts-keysee/src/components/Reusable/MainButton";
import Modal from "../../../../../ts-keysee/src/components/Reusable/Modal";

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
        <div className={classes.title}>Do you want to log out?</div>
        <MainButton title="Log Out" onClick={logoutHandler} />
      </div>
    </Modal>
  );
};

export default LogoutModal;
