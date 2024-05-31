import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
const LikeButton = ({ isLiked, setLikedStatus, className }) => {
  return (
    <button onClick={setLikedStatus} className={className}>
      <small>{isLiked ? "♥" : "♡"}</small>
    </button>
  );
};

export default LikeButton;
