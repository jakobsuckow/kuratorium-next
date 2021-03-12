import React, { SetStateAction } from "react";
import { Cart } from "../@types";

export interface Props {
  children: React.ReactNode;
}

type ContextProps = {
  cart: Cart[] | undefined;
  setCart: React.Dispatch<SetStateAction<Cart[]>>;
};

export const GlobalDataContext = React.createContext({} as ContextProps);

const GlobalDataProvider = (props: Props) => {
  const { children } = props;
  const [cart, setCart] = React.useState<Cart[] | undefined>();
  return (
    <GlobalDataContext.Provider value={{ cart, setCart }}>{children}</GlobalDataContext.Provider>
  );
};

export default GlobalDataProvider;
