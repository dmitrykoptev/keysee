import React from "react";

import classes from "./Profile.module.css";
import logoMain from "../../images/LogoMain.png";

const Profile = () => {
  return (
    <div className={classes.container}>
      <form className={classes.profileForm}>
        <h1>Change password</h1>
        <input type="password" placeholder="Old password" />
        <input type="password" placeholder="New password" />
        <button type="submit">Change password</button>
      </form>
      <img src={logoMain} alt="keysee" className={classes.mainLogo} />
    </div>
  );
};

export default Profile;
