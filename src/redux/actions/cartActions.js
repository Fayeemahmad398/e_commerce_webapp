import * as action from "./actionstypes";

export const addToCart = (product) => {
  return {
    type: action.ADDTO_CART,
    payload: product,
  };
};
export const deleteFromCart = (product_id) => {
  return {
    type: action.REMOVE_CART,
    payload: product_id,
  };
};

export const checkout = () => {
  return {
    type: action.CHECKOUT,
    payload: product,
  };
};
