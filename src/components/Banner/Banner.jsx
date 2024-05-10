import style from "./Banner.module.scss";

import React from "react";

const Banner = ({ message }) => {
  return <h4 className={style.animated}>{message}</h4>;
};

export default Banner;
