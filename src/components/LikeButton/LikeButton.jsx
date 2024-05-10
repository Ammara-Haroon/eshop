import React, { useState } from "react";
import style from "./LikeButton.module.scss";
const LikeButton = ({ isLiked, setLikedStatus, className }) => {
  return (
    <button className={style.btn}>
      <small className={className} onClick={setLikedStatus}>
        {isLiked ? "♥" : "♡"}
      </small>
    </button>
  );
};

export default LikeButton;
