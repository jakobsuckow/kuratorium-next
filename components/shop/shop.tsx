import React, { Dispatch, SetStateAction } from "react";
import { CartItem } from "../../@types";
import { clearCart, removeFromCart } from "../../services/shoppingCart";
import { useRouter } from "next/router";

interface Props {
  setShifted: Dispatch<SetStateAction<boolean>>;
}

const Shop: React.FC<Props> = (props: Props) => {
  const { setShifted } = props;
  const router = useRouter();

  const [cart, setCart] = React.useState<any | null>([]);

  React.useEffect(() => {
    const localItems = localStorage.getItem("cart");
    setCart(JSON.parse(localItems as string));
  }, [setShifted, clearCart, removeFromCart]);

  return (
    <>
      <h1>Shop</h1>
      <p>
        Welcome to the Kuratorium shop. We are shipping out all products on a weekly basis. Should
        you have any questions, please write an email to shop@kuratorium.net. By ordering, you
        declare your acceptance of our terms and conditions, as well as the cancellation policy.{" "}
        <br />
        <a href="mailto:shop@kuratorium.net">shop@kuratorium.net</a>
      </p>
      {cart?.length > 0 ? (
        <>
          {cart.map((c: CartItem, i: number) => (
            <div key={i}>
              <p>name:{c.name}</p>
              <p>quantity: {c.quantity}</p>
              <p onClick={() => removeFromCart(c.id)}>remove from cart</p>
            </div>
          ))}

          <div className="flex-2">
            <div className="inner">
              <button onClick={() => setShifted(false)}>Continue Shopping</button>
            </div>
            <div className="inner right">
              <button onClick={() => router.push("/checkout")}>Go to Checkout</button>
            </div>
          </div>
        </>
      ) : (
        <p>
          You did not add an item to the Cart.
          <span className="cursor underline" onClick={() => setShifted(false)}>
            Go Back
          </span>
          to Projects and add to add.
        </p>
      )}
    </>
  );
};
export default Shop;
