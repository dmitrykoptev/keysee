import React, { useState } from "react";

import classes from "./MainHeader.module.css";
import logo from "../../images/Logo.png";
import userImg from "../../images/Photo.png";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

const MainHeader = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };

  const logOutHandler = () => {
    dispatch(authActions.logOut());
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
            onClick={showModalHandler}
          />
        </nav>
      </header>
      {showModal && (
        <div className={classes.modal} onClick={closeModalHandler}>
          <div className={classes.popUp}>
            <a href="/profile">My Profile</a>
            <a href="#" onClick={logOutHandler}>
              Log out
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default MainHeader;
