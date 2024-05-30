import { getFavouriteProducts } from "../../services/products-service";
import style from "./WishListPage.module.scss";
import React, { useContext, useEffect, useState } from "react";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { FavouriteProductsContext } from "../../contexts/FavouriteProductsContext";
const WishListPage = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [errMsg, setErrMsg] = useState(null);
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   setErrMsg(null);
  //   setIsLoading(true);
  //   getFavouriteProducts()
  //     .then((products) => {
  //       setProducts(products);
  //     })
  //     .catch((e) => {
  //       setErrMsg(err.message);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

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
