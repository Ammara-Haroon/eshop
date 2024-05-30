import React, { useState } from "react";
import style from "./LikeButton.module.scss";
const LikeButton = ({ isLiked, setLikedStatus, className }) => {
  return (
    <button onClick={setLikedStatus} className={className}>
      <small>
        {isLiked ? "♥" : "♡"}
      </small>
    </button>
  );
};

export default LikeButton;
