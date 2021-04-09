import React, { SetStateAction, useReducer } from "react";
import { CartItem, Track } from "../@types";
import useLocalStorage from "./useLocalStorate";

export interface Props {
  children: React.ReactNode;
}

type ContextProps = {
  cart: CartItem[] | [];
  setCart: any;
  userInput: any;
  setUserInput: any;
  currentTrack: Track | undefined;
  setCurrentTrack: React.Dispatch<SetStateAction<Track | undefined>>;
  addToCart: (cartItem: CartItem) => void;
  deleteItem: (id: string) => void;
};

export const GlobalDataContext = React.createContext({} as ContextProps);

const GlobalDataProvider = (props: Props) => {
  const { children } = props;
  const [cart, setCart] = useLocalStorage<CartItem[] | []>("cart", []);

  const deleteItem = (id: string) => {
    const filterItems = cart.filter((item: any) => item.id !== id);
    setCart(filterItems);
  };

  const addToCart = (cartItem: CartItem) => {
    const existingArray = cart.filter((item: CartItem) => item.id == cartItem.id);
    const item: CartItem = existingArray[0];
    let others = cart.filter((item: CartItem) => item.id !== cartItem.id);
    if (existingArray.length > 0) {
      setCart([
        ...others,
        {
          ...(item as CartItem),
          quantity: item.quantity + 1,
        },
      ]);
    } else {
      //@ts-ignore
      setCart((existingItems: CartItem[]) => [...existingItems, cartItem]);
    }
  };

  const [currentTrack, setCurrentTrack] = React.useState<Track | undefined>(undefined);

  const [userInput, setUserInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      firstName: "",
      lastName: "",
      emailAddress: "",
      streetName: "",
      streetNumber: "",
      city: "",
      postal: "",
      country: "",
      shippingCost: 0,
      paymentMethod: "",
    }
  );

  return (
    <GlobalDataContext.Provider
      value={{
        cart,
        setCart,
        userInput,
        setUserInput,
        currentTrack,
        setCurrentTrack,
        deleteItem,
        addToCart,
      }}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataProvider;
