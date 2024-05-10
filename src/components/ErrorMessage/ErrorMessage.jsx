import React from "react";
import style from "./ErrorMessage.module.scss";
const ErrorMessage = ({ errMsg }) => {
  return (
    <div className={style.error}>
      <h2>{errMsg}</h2>
      <h4>Sorry...something went wrong !</h4>
      <ul>
        Here are a few tips to get what you want:
        <li>Try a different link</li>
        <li>Check the spellings</li>
        <li>...or just try again after a break!</li>
      </ul>
    </div>
  );
};

export default ErrorMessage;
