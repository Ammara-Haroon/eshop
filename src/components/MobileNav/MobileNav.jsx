import style from "./MobileNav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import NavBar from "../NavBar/NavBar";

const MobileNav = () => {
  const navRef = useRef();
  const openMenu = () => {
    console.log("open up a menu");
    navRef.current.style.display = "block";
  };
  const closeMenu = () => {
    console.log("close menu", navRef.current);
    navRef.current.style.display = "none";
  };
  const handleClick = () => {
    navRef.current.style.display = "none";
  };
  return (
    <div className={style.wrapper}>
      <button className={style.open_btn} onClick={openMenu}>
        <FontAwesomeIcon icon={faBars} className={style.mob_nav} siz="lg" />
      </button>
      <div onClick={handleClick} className={style.overlay} ref={navRef}>
        <NavBar mode="mobile" />
        <button onClick={closeMenu} className={style.close_btn}>
          X
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
