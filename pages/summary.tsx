import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Paypal from "../components/paypal/paypal";
import StripeCheckout from "../components/stripe/stripeCheckout";
import { GlobalDataContext } from "../services/globalDataProvider";

interface Props {}

const Summary: NextPage<Props> = (props: Props) => {
  const {} = props;

  const [cart, setCart] = React.useState<any | null>([]);

  const { userInput } = React.useContext(GlobalDataContext);

  React.useEffect(() => {
    const localItems = localStorage.getItem("cart");
    setCart(JSON.parse(localItems as string));
  }, []);

  const router = useRouter();

  const totalPrice = cart.reduce((acc: any, currentCart: any) => acc + currentCart.price, 0);

  const summary = parseFloat(totalPrice) + parseFloat(userInput.shippingCost);

  const formatedSummary = summary.toLocaleString("de-AT", {
    style: "currency",
    currency: "EUR",
  });

  return (
    <div className="summary">
      <div className="tac mt-16">
        <img src="/kuratorium-logo.png" alt="Kuratorium" className="logo" draggable="false" />
      </div>

      <div className="agenda mb-4 mt-4">
        <div>
          <p
            className="cursor underline"
            onClick={e => {
              e.preventDefault();
              router.push("/checkout");
            }}>
            Personal Details
          </p>
        </div>
        <div>
          <p className="underline">Payment</p>
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

      <div className="flex-2">
        <div className="inner">
          <p>shipping to: {userInput.country}</p>
        </div>
        <div className="inner right">{userInput.shippingCost}€</div>
      </div>
      <div className="divider"></div>
      <div className="flex-2">
        <div className="inner">
          <p>Total with Shipping</p>
        </div>
        <div className="inner right">{formatedSummary}€</div>
      </div>
      <p>
        We are shipping out all products on a weekly basis. Should you have any questions, please
        write an email to shop@kuratorium.net. By ordering, you declare your acceptance of our terms
        and conditions, as well as the cancellation policy.
      </p>

      <h3>Shipping Address</h3>
      <p>Contact: {userInput.emailAddress}</p>
      <p>
        Address: {userInput.streetName} {userInput.streetNumber}, {userInput.city},{" "}
        {userInput.country}
      </p>

      <h3>Payment</h3>
      <p>All transactions are secure.</p>
      {userInput.paymentMethod === "paypal" ? (
        <>
          <p>
            After clicking the button, you will be redirected to PayPal to complete your purchase
            securely.
          </p>
          <Paypal amount={summary} cart={cart} />
        </>
      ) : userInput.paymentMethod === "creditCard" ? (
        <StripeCheckout amount={summary} />
      ) : (
        <>
          <p>Please Select a Payment Method</p>
        </>
      )}
    </div>
  );
};

export default Summary;
