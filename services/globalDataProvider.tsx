import React, { SetStateAction, useReducer } from "react";
import { Track } from "../@types";
import useLocalStorage from "./useLocalStorate";

export interface Props {
  children: React.ReactNode;
}

type ContextProps = {
  cart: any[] | undefined;
  setCart: any;
  userInput: any;
  setUserInput: any;
  currentTrack: Track | undefined;
  setCurrentTrack: React.Dispatch<SetStateAction<Track | undefined>>;
};

export const GlobalDataContext = React.createContext({} as ContextProps);

const GlobalDataProvider = (props: Props) => {
  const { children } = props;
  const [cart, setCart] = useLocalStorage("cart", []);

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
      value={{ cart, setCart, userInput, setUserInput, currentTrack, setCurrentTrack }}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataProvider;
