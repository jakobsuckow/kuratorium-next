import { useRouter } from "next/router";
import React from "react";
import { CartItem } from "../../@types";
import Loading from "../loading/loading";

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
    setTimeout(
      () =>
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
              router.push("/thankyou");
            },
            onError: (err: any) => {
              setErrors(err);
              console.error(err);
            },
          })
          .render(paypalRef.current),
      1000
    );
  }, [amount]);

  if (loading) {
    <Loading name="Paypal" />;
  }

  return (
    <>
      <div className="paypal_button">
        <div ref={paypalRef} />
      </div>
    </>
  );
};
export default Paypal;
