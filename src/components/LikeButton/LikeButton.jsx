import React, { useState } from "react";
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
