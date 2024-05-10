import React from "react";
import style from "./PagingInformation.module.scss";

const PagingInformation = ({ startIndex, endIndex, totalNumberOfProducts }) => {
  return (
    <div className={style.paging_info}>
      <small>
        Showing {startIndex} - {endIndex} of {totalNumberOfProducts} Products
      </small>
    </div>
  );
};

export default PagingInformation;
