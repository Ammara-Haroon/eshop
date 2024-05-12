//extract category name from search parameter 
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

//convert category name to a search parameter
export const addFilterForCategory = (url, filter) => {
  if (filter) {
    url += "?filter=" + filter.toLowerCase().replace(" ", "-");
  }
  return url;
};

//format price to a price string
export const getFormattedPrice = (number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);

//calculate the discounted price and return as a formatted string
export const getPriceAfterDiscount = (price, discount) => {
  return getFormattedPrice(
    Number(price) - (Number(discount) * Number(price)) / 100
  );
};

//calculate number of pages required to display total number of products
export const getNumberOfPages = (total, numberOfProductsPerPage = 20) => {
  return Math.ceil(total / numberOfProductsPerPage);
};
