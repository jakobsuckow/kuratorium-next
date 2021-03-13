import { CartItem } from "../@types";

export const addToCart = (item: CartItem) => {
  const currentCart = localStorage.getItem("cart") ? localStorage.getItem("cart") : "[]";
  let products: CartItem[] = [];
  if (currentCart) {
    products = JSON.parse(currentCart);
  }

  let existintP = products.filter((p: CartItem) => p.id === item.id);

  if (existintP.length > 0) {
    existintP[0].quantity += 1;
  } else {
    products.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(products));
};

export const removeFromCart = (id: string) => {
  //note: as SKU logic is not implemtented, removeFromCart clears the complete cart as one does not know which size should be subtracted from the cart
  const currentCart = localStorage.getItem("cart") ? localStorage.getItem("cart") : "[]";
  let products: CartItem[] = [];
  if (currentCart) {
    products = JSON.parse(currentCart);
  }

  const filtered = products.filter((p: CartItem) => p.id !== id);
  localStorage.setItem("cart", JSON.stringify(filtered));
};

export const clearCart = (): void => {
  return localStorage.clear();
};
