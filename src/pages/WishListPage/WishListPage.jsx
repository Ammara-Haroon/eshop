import { getFavouriteProducts } from "../../services/products-service";
import style from "./WishListPage.module.scss";
import React, { useContext, useEffect, useState } from "react";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { FavouriteProductsContext } from "../../contexts/FavouriteProductsContext";
const WishListPage = () => {
  const {favProducts,isLoading,errMsg} = useContext(FavouriteProductsContext);
  return (
    <div className={style.page}>
      {errMsg && <ErrorMessage errMsg={errMsg} />}
      {isLoading && <LoadingSpinner />}
      {!errMsg && !isLoading && (
        <ProductsGrid
          products={favProducts}
          heading="My Wish List"
          needsPaging={false}
        />
      )}
    </div>
  );
};

export default WishListPage;
