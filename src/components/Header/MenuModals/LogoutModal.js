import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth";
import { modalActions } from "../../../store/modals";
import MainButton from "../../Reusable/MainButton";
import Modal from "../../Reusable/Modal";

import classes from "./LogoutModal.module.css";

const LogoutModal = (props) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(modalActions.closeModal());
    dispatch(authActions.logOut());
  };

  return (
    <Modal modalType="logout" show={props.show}>
      <div className={classes.container}>
        <span className={classes.title}>Do you want to log out?</span>
        <MainButton title="Log Out" onClick={logoutHandler} />
      </div>
    </Modal>
  );
};

export default LogoutModal;
