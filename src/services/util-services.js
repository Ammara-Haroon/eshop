export const getCategoryFromFilter = (filter) => {
  let filterStr = "";
  switch (filter) {
    case "tote-bag":
      filterStr = "Tote Bag";
      break;
    case "crossbody-bag":
      filterStr = "Crossbody Bag";
      break;
    case "clutch-bag":
      filterStr = "Clutch Bag";
      break;
  }
  return filterStr;
};

export const addFilterForCategory = (url, filter) => {
  if (filter) {
    url += "?filter=" + filter.toLowerCase().replace(" ", "-");
  }
  return url;
};
export const getFormattedPrice = (number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);

export const getPriceAfterDiscount = (price, discount) => {
  return getFormattedPrice(
    Number(price) - (Number(discount) * Number(price)) / 100
  );
};

export const getNumberOfPages = (total, numberOfProductsPerPage = 20) => {
  return Math.ceil(total / numberOfProductsPerPage);
};
