import React, { useEffect, useState } from "react";
import style from "./HomePage.module.scss";
import Carousel from "../../components/Carousel/Carousel";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";
import { getInitialData } from "../../services/products-service";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getNumberOfPages } from "../../services/util-services";
import Banner from "../../components/Banner/Banner";
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const numberOfProductsPerPage = 20;
  const navigate = useNavigate();

  useEffect(() => {
    setErrMsg(null);
    setIsLoading(true);
    getInitialData()
      .then((data) => {
        setProducts(data.products);
        setFeaturedProducts(data.featured);
        setTotalCount(data.totalCount);
      })
      .catch((err) => {
        console.error(err.message);
        setErrMsg(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  //use state of useNavigate hook to set/reset sort option
  const handleSort = (val) => {
    navigate("/eshop/1", { state: { sortBy: val } });
  };

  return (
    <div className={style.page}>
      <Banner message={"Big Sale Tomorrow -- 40% OFF on ALL ITEMS"} />
      {errMsg && <ErrorMessage errMsg={errMsg} />}
      {isLoading && <LoadingSpinner />}
      {!errMsg && !isLoading && products.length > 0 && (
        <>
          <Carousel products={featuredProducts} isAutoSliding={true} />
          <ProductsGrid
            products={products}
            numberOfPages={getNumberOfPages(
              totalCount,
              numberOfProductsPerPage
            )}
            currentPage={1}
            totalCount={totalCount}
            sortProducts={handleSort}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
