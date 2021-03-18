import React from "react";
import { useRouter } from "next/router";
import { CartItem } from "../../@types";

interface Props {
  amount: number;
  cart: CartItem[];
}

const Paypal: React.FC<Props> = (props: Props) => {
  const { amount, cart } = props;

  const router = useRouter();

  const [loading, setLoading] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<any>({});
  const paypalRef = React.useRef(null);

  React.useEffect(() => {
    window.paypal
      .Buttons({
        style: {
          size: "small",
          color: "silver",
          shape: "rect",
          layout: "horizontal",
          tagline: "false",
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                description: `${cart.map((item: CartItem) => {
                  const { size, name } = item;
                  return `${name} size ${size}`;
                })}`,
                amount: {
                  currency_code: "EUR",
                  value: `${amount}`,
                },
              },
            ],
          });
        },

        // onInit: async (data, actions) => {
        //   actions.disable()
        //   setProcessing(true)
        // },

        onApprove: async (data: any, actions: any) => {
          setLoading(true);
          const order = await actions.order.capture();
          router.push("thankyou");
        },
        onError: (err: any) => {
          setErrors(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [amount]);

  return (
    <div>
      {errors && <div>{errors.message}</div>}
      <div className="divider"></div>
      <div className="flex-2">
        <div className="inner">
          <p>Total Amount</p>
        </div>
        <div className="inner right">{amount}€</div>
      </div>

      <div className={`loading ${!loading && `hidden`}`}>waiting for Paypal...</div>
      <div className="paypal_button">
        <div ref={paypalRef} className={`${loading && `hidden`}`} />
      </div>
    </div>
  );
};
export default Paypal;
