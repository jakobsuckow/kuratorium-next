import React, { useContext } from "react";
import Link from "next/link";
import AutoComplete from "../components/autocomplete/autoComplete";
import { Order } from "../@types";

const Checkout = () => {
  const [userInput, setUserInput] = React.useReducer<any>(
    (state: Order, newState: any) => ({ ...state, ...newState }),
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

  const [cart, setCart] = React.useState<any | null>([]);

  React.useEffect(() => {
    console.log(`hi`);
    const localItems = localStorage.getItem("cart");
    setCart(JSON.parse(localItems as string));
  }, []);

  const totalPrice = cart.reduce((acc: any, currentCart: any) => acc + currentCart.price, 0);

  const summary = parseFloat(totalPrice);

  const formatedSummary = summary.toLocaleString("de-AT", {
    style: "currency",
    currency: "EUR",
  });
  if (cart.length === 0) {
    return (
      <>
        <div className="summary">
          <div className="tac mt-16">
            {/* <Link href={`/`}>
              <img src={logo} alt="Kuratorium" className="logo" draggable="false" />
            </Link> */}
          </div>

          <p>you did not add any Products</p>
          <Link href="/">Go back to Shop</Link>
        </div>
      </>
    );
  }

  return (
    <div className="summary">
      <div className="tac mt-16">
        {/* <Link href={`/`}>
          <img src={logo} alt="Kuratorium" className="logo" draggable="false" />
        </Link> */}
      </div>

      <div className="agenda mb-4 mt-4">
        <div>
          <p className="underline">Personal Details</p>
        </div>
        <div>
          <p>Payment</p>
        </div>
        <div>
          <p>Overview</p>
        </div>
      </div>
      <h3 className="mb-4">Cart Summary</h3>
      {cart.map((item: any, index: number) => (
        <div className="cart_item mb-2" key={index}>
          {/* <img
            src={item.images[0].thumbnails.large.url}
            alt={item.name}
            className="cart_img mr-1"
          /> */}
          <div className="item_name">
            <p>{item.name}</p>
            {item.size ? (
              <>
                <p>{item.size.toUpperCase()}</p>
              </>
            ) : null}
          </div>
          <div className="item_price">
            <p>{item.price} €</p>
          </div>
        </div>
      ))}
      <div className="cart_total">
        <span>items in Cart: </span>
        <p>{cart.length}</p>
        <span>Total Price</span>
        <p>{formatedSummary}</p>
      </div>
      <div className="divider my-2"></div>
      <AutoComplete userInput={userInput} setUserInput={setUserInput} />
    </div>
  );
};

export default Checkout;
