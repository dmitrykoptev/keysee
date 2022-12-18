import React from "react";
import Modal from "../../Layout/Modal";

import classes from "./ChangePasswordModal.module.css";

const ChangePasswordModal = () => {
  return (
    <Modal>
      <div className={classes.container}>
        <span className={classes.title}>Change password</span>
        <form>
          <div className={classes.inputsContainer}>
            <input type="password" placeholder="Old password" />
            <input type="password" placeholder="New password" />
            <input type="password" placeholder="New password" />
          </div>
          <button type="submit" className={classes.changePasswordButton}>
            Change
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ChangePasswordModal;
