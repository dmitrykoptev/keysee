import React from "react";

import classes from "./AddTwitter.module.css";
import SectionBottom from "../Layout/SectionBottom";

const AddTwitter = () => {
  return (
    <SectionBottom>
      <div className={classes.add__followings}>
        <input type="text" placeholder="@twitterhandle" />
        <button className={classes.btn__add}>Add</button>
      </div>
    </SectionBottom>
  );
};

export default AddTwitter;
