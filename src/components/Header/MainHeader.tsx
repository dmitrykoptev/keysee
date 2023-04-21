import React from "react";
import classes from "./MainHeader.module.scss";
import logo from "../../images/Logo.png";
import userImg from "../../images/Photo.png";
import HeaderMenu from "./HeaderMenu";
import LogoutModal from "./MenuModals/LogoutModal";
import ChangeEmailModal from "./MenuModals/CnahgeEmailModal";
import ChangePasswordModal from "./MenuModals/ChangePasswordModal";
import { modalActions } from "../../store/Modals/modalsSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../ts-keysee/src/hooks/ts-hooks";
import {
  showChangeEmailModalSelector,
  showChangePasswordModalSelector,
  showLogoutModalSelector,
  showMenuSelector,
} from "../../store/Modals/modalsSelectors";

const MainHeader = () => {
  const dispatch = useAppDispatch();
  const menuActive = useAppSelector(showMenuSelector);
  const showLogout = useAppSelector(showLogoutModalSelector);
  const showChangeEmail = useAppSelector(showChangeEmailModalSelector);
  const showChangePassword = useAppSelector(showChangePasswordModalSelector);

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
            <img src={logo} alt="KeySee" className={classes.header__logo} />
          </a>
          <img
            src={userImg}
            alt="User Avatar"
            className={classes.header__avatar}
            onClick={menuActiveHandler}
          />
        </nav>
      </header>
      <HeaderMenu show={menuActive} setActive={menuActiveHandler} />
      <LogoutModal show={showLogout} />
      <ChangeEmailModal show={showChangeEmail} />
      <ChangePasswordModal show={showChangePassword} />
    </>
  );
};

export default MainHeader;
