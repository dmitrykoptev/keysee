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
        <ul
          className={classes.menuList}
          onClick={(event) => event.stopPropagation()}
        >
          <li onClick={showChangePasswordHandler} className={classes.menuLi}>
            <div className={classes.optionsIcon}></div>
            <span>Change password</span>
          </li>
          <li onClick={showLogoutHandler} className={classes.menuLi}>
            <div className={classes.logoutIcon}></div>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderMenu;
