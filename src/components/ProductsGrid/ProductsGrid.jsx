import React, { useEffect, useState } from "react";
import style from "./ProductsGrid.module.scss";
import PagingInformation from "../PagingInformation/PagingInformation";
import PageSelector from "../PageSelector/PageSelector";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import Message from "../Message/Message";
const ProductsGrid = ({
  products,
  currentPage,
  numberOfPages,
  totalCount,
  heading = "All Bags",
  needsPaging = true,
  sortProducts,
  sortBy,
  filter,
}) => {
  const navigate = useNavigate();
  const fetchPage = (pg) => {
    let url = `/eshop/${Number(pg)}`;
    if (filter) {
      url += "?filter=" + filter.toLowerCase().replace(" ", "-");
    }
    navigate(url, { replace: true, state: { sortBy: sortBy } });
  };
  const numberOfProductsPerPage = 20;
  const startIndex = 1 + (currentPage - 1) * numberOfProductsPerPage;
  let endIndex = startIndex + numberOfProductsPerPage - 1;
  endIndex = endIndex > totalCount ? totalCount : endIndex;
  const sortCategories = ["title", "price"];
  console.log("sortby", sortBy);
  return (
    <div className={style.container}>
      <h3>{heading}</h3>
      {products.length !== 0 && (
        <>
          {needsPaging && (
            <div className={style.sort}>
              <label htmlFor="sortBy">Sort By:</label>
              <select
                onChange={(e) => sortProducts(e.target.value)}
                id="sortBy"
                defaultValue={sortBy}
              >
                {sortCategories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          )}
          {needsPaging && (
            <PagingInformation
              startIndex={startIndex}
              endIndex={endIndex}
              totalNumberOfProducts={totalCount}
            />
          )}
          <div className={style.grid}>
            {products.map((product) => (
              <ProductCard key={product.docId} product={product} />
            ))}
          </div>
          {needsPaging && (
            <PageSelector
              numberOfPages={numberOfPages}
              currentPage={currentPage}
              fetchPage={fetchPage}
            />
          )}
        </>
      )}
      {products.length === 0 && <Message message={"No Products to Display"} />}
    </div>
  );
};

export default ProductsGrid;
