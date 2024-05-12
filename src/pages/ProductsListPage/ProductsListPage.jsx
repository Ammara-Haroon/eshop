import style from "./ProductsListPage.module.scss";
import React, { useState, useEffect } from "react";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";
import {
  useParams,
  useNavigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { getProductsDataByPage } from "../../services/products-service";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import {
  addFilterForCategory,
  getCategoryFromFilter,
  getNumberOfPages,
} from "../../services/util-services";

const ProductsListPage = () => {
  const { page } = useParams();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const newFilter = searchParams.get("filter");
  const [filter, setFilter] = useState(null);
  let filterStr = getCategoryFromFilter(newFilter);
  if (filterStr != filter) {
    setFilter(filterStr);
  }
  const [sortBy, setSortBy] = useState(location.state?.sortBy);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const numberOfProductsPerPage = 20;

  useEffect(() => {
    setErrMsg(null);
    setIsLoading(true);
    getProductsDataByPage(page, numberOfProductsPerPage, sortBy, filter)
      .then((data) => {
        setProducts(data.products);
        setTotalCount(data.totalCount);
      })
      .catch((err) => {
        setErrMsg(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, sortBy, filter]);
  const navigate = useNavigate();

  const handleSort = (val) => {
    setSortBy(val);
    const url = addFilterForCategory("/eshop/1", filter);
    navigate(url, { state: { sortBy: val } });
  };

  const heading = filter ? filter + "s" : "All Bags";

  return (
    <div className={style.page}>
      {errMsg && <ErrorMessage errMsg={errMsg} />}
      {isLoading && <LoadingSpinner />}
      {!errMsg && !isLoading && products.length > 0 && (
        <ProductsGrid
          products={products}
          numberOfPages={getNumberOfPages(totalCount)}
          currentPage={Number(page)}
          totalCount={totalCount}
          sortBy={sortBy}
          filter={filter}
          sortProducts={handleSort}
          heading={heading}
        />
      )}
    </div>
  );
};

export default ProductsListPage;
