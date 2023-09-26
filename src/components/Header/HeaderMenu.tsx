import React from "react";
import classes from "./HeaderMenu.module.scss";
import { modalActions } from "../../store/Modals/modalsSlice";
import { CSSTransition } from "react-transition-group";
import { useAppDispatch } from "../../hooks/ts-hooks";

interface IHeaderMenuProps {
  show: boolean;
  setActive: () => void;
}

const HeaderMenu = ({ show, setActive }: IHeaderMenuProps) => {
  const dispatch = useAppDispatch();

  const showLogoutHandler = () => {
    dispatch(modalActions.openLogoutModal());
  };

  const showChangePasswordHandler = () => {
    dispatch(modalActions.openChangePasswordModal());
  };

  const showChangeEmailHandler = () => {
    dispatch(modalActions.openChangeEmailModal());
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
          <li
            onClick={showChangePasswordHandler}
            className={classes.menuList__item}
          >
            <div
              className={`${classes.menuIcon} ${classes[`menuIcon--password`]}`}
            ></div>
            <span>Change password</span>
          </li>
          <li
            onClick={showChangeEmailHandler}
            className={classes.menuList__item}
          >
            <div
              className={`${classes.menuIcon} ${classes[`menuIcon--email`]}`}
            ></div>
            <span>Change email</span>
          </li>
          <li onClick={showLogoutHandler} className={classes.menuList__item}>
            <div
              className={`${classes.menuIcon} ${classes[`menuIcon--logout`]}`}
            ></div>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </CSSTransition>
  );
};

export default HeaderMenu;
