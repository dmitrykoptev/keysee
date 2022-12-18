import React from "react";
import { useDispatch } from "react-redux";

import classes from "./HeaderMenu.module.css";
import { modalActions } from "../../store/modals";

const HeaderMenu = ({ active, setActive }) => {
  const dispatch = useDispatch();

  const menuClasses = active
    ? `${classes.menu} ${classes.active}`
    : `${classes.menu}`;

  const showLogoutHandler = () => {
    dispatch(modalActions.openLogoutModal());
  };

  const showChangePasswordHandler = () => {
    dispatch(modalActions.openChangePasswordModal());
  };

  return (
    <>
      <div className={menuClasses} onClick={setActive}>
        <div className={classes.menuList} onClick={(e) => e.stopPropagation()}>
          <span onClick={showChangePasswordHandler}>Change password</span>
          <span onClick={showLogoutHandler}>Logout</span>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
