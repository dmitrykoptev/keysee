import React from "react";

import classes from "./MainHeader.module.css";
import logo from "../../images/Logo.png";
import userImg from "../../images/Photo.png";
import HeaderMenu from "./HeaderMenu";
import { useDispatch, useSelector } from "react-redux";
import LogoutModal from "./MenuModals/LogoutModal";
import ChangePasswordModal from "./MenuModals/ChangePasswordModal";
import { modalActions } from "../../store/modals";

const MainHeader = () => {
  const dispatch = useDispatch();
  const menuActive = useSelector((state) => state.modals.showMenu);
  const showLogout = useSelector((state) => state.modals.showLogoutModal);
  const showChangePassword = useSelector(
    (state) => state.modals.showChangePasswordModal
  );
  const menuActiveHandler = () => {
    !menuActive
      ? dispatch(modalActions.openMenu())
      : dispatch(modalActions.closeMenu());
  };

  return (
    <>
      <header className={classes.header}>
        <nav>
          <a href="/">
            <img src={logo} alt="KeySee" className={classes.logo__img} />
          </a>
          <img
            src={userImg}
            alt="User Avatar"
            className={classes.user__avatar}
            onClick={menuActiveHandler}
          />
        </nav>
      </header>
      <HeaderMenu show={menuActive} setActive={menuActiveHandler} />
      <LogoutModal show={showLogout} />
      <ChangePasswordModal show={showChangePassword} />
    </>
  );
};

export default MainHeader;
