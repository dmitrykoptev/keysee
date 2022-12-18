import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth";
import Modal from "../../Layout/Modal";

import classes from "./LogoutModal.module.css";

const LogoutModal = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logOut());
  };

  return (
    <Modal>
      <div className={classes.container}>
        <span className={classes.title}>Do you want to log out?</span>
        <button onClick={logoutHandler} className={classes.logoutButton}>
          Log Out
        </button>
      </div>
    </Modal>
  );
};

export default LogoutModal;
