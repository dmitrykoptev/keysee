import React from "react";
import { useDispatch } from "react-redux";

import classes from "./HeaderMenu.module.css";
import { modalActions } from "../../store/modals";
import { CSSTransition } from "react-transition-group";

const HeaderMenu = ({ show, setActive }) => {
  const dispatch = useDispatch();

  const showLogoutHandler = () => {
    dispatch(modalActions.openLogoutModal());
  };

  const showChangePasswordHandler = () => {
    dispatch(modalActions.openChangePasswordModal());
  };

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={200}
      classNames={{
        enter: "",
        enterActive: classes.menuOpen,
        exit: "",
        exitActive: classes.menuClose,
      }}
    >
      <div className={classes.menu} onClick={setActive}>
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
    </CSSTransition>
  );
};

export default HeaderMenu;
