export const addToCart = (product, color = "black", quantity = 1) => {
  if (!window.sessionStorage.getItem("cart")) {
    window.sessionStorage.setItem("cart", JSON.stringify([]));
  }
  const cart = JSON.parse(window.sessionStorage.getItem("cart"));
  const index = cart.findIndex(
    (item) => item.product.docId === product.docId && item.color === color
  );
  if (index === -1) {
    cart.push({ product: product, color: color, quantity: quantity });
  } else if (cart[index].quantity + quantity <= cart[index].product.stock) {
    cart[index].quantity = cart[index].quantity + quantity;
  } else {
    throw new Error("No more stock !");
  }
  window.sessionStorage.setItem("cart", JSON.stringify(cart));
  return cart;
};

export const deleteFromCart = (productId, color) => {
  const cart = JSON.parse(window.sessionStorage.getItem("cart"));
  const index = cart.findIndex(
    (item) => item.product.docId === productId && item.color === color
  );
  if (index === -1) {
    return;
  }
  if (Number(cart[index].quantity) === 1) {
    window.sessionStorage.setItem(
      "cart",
      JSON.stringify(
        cart.filter((p) => p.product.docId !== productId || p.color !== color)
      )
    );
  } else {
    cart[index].quantity = Number(cart[index].quantity) - 1;

    window.sessionStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const getCart = () => {
  if (!window.sessionStorage.getItem("cart")) {
    window.sessionStorage.setItem("cart", JSON.stringify([]));
  }
  return JSON.parse(window.sessionStorage.getItem("cart"));
};

export const getCartTotal = () => {
  if (!window.sessionStorage.getItem("cart")) {
    return 0;
  }
  const cart = JSON.parse(window.sessionStorage.getItem("cart"));
  return cart.reduce((acc, cur) => {
    return (
      acc +
      cur.quantity *
        Number(cur.product.price) *
        ((100 - Number(cur.product.discountPercentage)) / 100)
    );
  }, 0);
};


export const getNumberOfCartItems = () => {
  return getCart().reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);
};
