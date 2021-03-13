import { CartItem } from "../@types";

export const addToCart = (item: CartItem) => {
  const currentCart = localStorage.getItem("cart");

  let products: Array<any> = [];
  if (currentCart) {
    products = [JSON.parse(currentCart)];
  }
  products.push(item);

  localStorage.setItem("cart", JSON.stringify(products));
};
export const clearCart = (): void => {
  return localStorage.clear();
};
