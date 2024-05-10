import style from "./ColoredRadioButtons.module.scss";

import React from "react";

const ColoredRadioButtons = ({ colors, label, defaultColor, onChange }) => {
  return (
    <div className={style.wrapper}>
      <label htmlFor="color">{label} </label>
      {colors.map((color) => (
        <input
          key={color}
          type="radio"
          name="color"
          className={style[[color]]}
          value={color}
          onChange={onChange}
          checked={color === defaultColor}
        />
      ))}
    </div>
  );
};

export default ColoredRadioButtons;
