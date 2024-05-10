import style from "./Slide.module.scss";

import React from "react";

const Slide = ({ imgSrc, index, total, caption }) => {
  //console.log(imgSrc, index, total, caption);
  return (
    <div className={style.slide}>
      {/* <small>
        {index}/{total}
      </small> */}
      <img src={imgSrc} alt={caption} />
      {caption && <p>{caption}</p>}
    </div>
  );
};

export default Slide;
