import style from "./Message.module.scss";

import React from "react";

const Message = ({ message, type = "message" }) => {
  const msgStyleClass =
    type === "message" ? `${style.message}` : `${style.popup}`;
  return (
    <div className={msgStyleClass}>
      <p>{message}</p>
    </div>
  );
};

export default Message;
