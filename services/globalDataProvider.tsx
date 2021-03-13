import React, { SetStateAction } from "react";
import { CartItem } from "../@types";

export interface Props {
  children: React.ReactNode;
}

type ContextProps = {
  cart: CartItem[] | undefined;
  setCart: React.Dispatch<SetStateAction<CartItem[]>>;
};

export const GlobalDataContext = React.createContext({} as ContextProps);

const GlobalDataProvider = (props: Props) => {
  const { children } = props;
  const [cart, setCart] = React.useState<CartItem[] | undefined>();
  return (
    <GlobalDataContext.Provider value={{ cart, setCart }}>{children}</GlobalDataContext.Provider>
  );
};

export default GlobalDataProvider;
