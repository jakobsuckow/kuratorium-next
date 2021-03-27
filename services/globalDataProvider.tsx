import React, { SetStateAction, useReducer } from "react";
import { CartItem, Track } from "../@types";

export interface Props {
  children: React.ReactNode;
}

type ContextProps = {
  cart: CartItem[] | undefined;
  setCart: React.Dispatch<SetStateAction<CartItem[]>>;
  userInput: any;
  setUserInput: any;
  currentTrack: Track | undefined;
  setCurrentTrack: React.Dispatch<SetStateAction<Track>>;
  toggle: () => void;
};

export const GlobalDataContext = React.createContext({} as ContextProps);

const GlobalDataProvider = (props: Props) => {
  const { children } = props;
  const [cart, setCart] = React.useState<CartItem[] | undefined>();

  const [currentTrack, setCurrentTrack] = React.useState<Track>({
    isPlaying: false,
    src:
      "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
  });

  const toggle = () => {
    setCurrentTrack((track: Track) => ({
      ...track,
      isPlaying: !track.isPlaying,
    }));
  };

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
      value={{ cart, setCart, userInput, setUserInput, currentTrack, setCurrentTrack, toggle }}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataProvider;
