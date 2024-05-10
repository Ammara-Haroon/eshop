import style from "./NavBar.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import mobile from "../MobileNav/MobileNav.module.scss";

const NavBar = ({ mode }) => {
  const navStyleClass = mode === "mobile" ? `${mobile.nav}` : `${style.nav}`;
  const lnkStyleClass = mode === "mobile" ? `${mobile.link}` : `${style.link}`;

  return (
    <div className={navStyleClass}>
      <Link className={lnkStyleClass} to="/eshop">
        Home
      </Link>
      <Link className={lnkStyleClass} to="/eshop/1">
        All Bags
      </Link>
      <Link className={lnkStyleClass} to="/eshop/1?filter=tote-bag">
        Tote Bags
      </Link>
      <Link className={lnkStyleClass} to="/eshop/1?filter=clutch-bag">
        Clutch Bags
      </Link>
      <Link className={lnkStyleClass} to="/eshop/1?filter=crossbody-bag">
        Crossbody Bags
      </Link>
      
    </div>
  );
};

export default NavBar;
