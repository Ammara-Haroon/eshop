import React, { useState } from "react";
import style from "./PageSelector.module.scss";
const PageSelector = ({ numberOfPages, currentPage, fetchPage }) => {
  const pages = [];
  //is the page number among the first group of pages
  const isFirst = currentPage === 1 || numberOfPages <= 5;
  //is the page number among the last group of pages
  const isLast =
    currentPage === numberOfPages || numberOfPages - currentPage < 5;
  //make a list of page numbers that should appear in the bar (selected page + 5 more)
  let i = currentPage;
  if (isLast) {
    i = numberOfPages - 4;
  }
  if (isFirst) {
    i = 1;
  }
  for (; i < currentPage + 5 && i <= numberOfPages; ++i) {
    pages.push(i);
  }

  const moveFwd = () => {
    fetchPage(currentPage + 1);
  };
  const selectPage = (pg) => {
    fetchPage(pg);
  };
  const moveBkwd = () => {
    fetchPage(currentPage - 1);
  };
  
  return (
    <div className={style.wrapper}>
      <div className={style.page_nav}>
        <button onClick={moveBkwd} disabled={currentPage === 1}>
          &#10094;
        </button>
        <ol className={style.paging}>
          {!isFirst ? (
            <li key={1} onClick={() => selectPage(1)}>
              1 {currentPage > 2 && "..."}
            </li>
          ) : null}
          {pages.map((page) => (
            <li
              key={page}
              style={
                currentPage === page
                  ? { textDecoration: "underline", color: "green" }
                  : {}
              }
              onClick={() => selectPage(page)}
            >
              {page}
            </li>
          ))}
          {!isLast ? (
            <li key={numberOfPages} onClick={() => selectPage(numberOfPages)}>
              {currentPage <= numberOfPages - 5 && "..." + numberOfPages}
            </li>
          ) : null}
        </ol>
        <button onClick={moveFwd} disabled={currentPage === numberOfPages}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default PageSelector;
