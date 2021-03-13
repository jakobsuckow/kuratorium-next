import React, { Dispatch, SetStateAction } from "react";
import { clearCart } from "../../services/shoppingCart";

interface Props {
  setShifted: Dispatch<SetStateAction<boolean>>;
}

const Shop: React.FC<Props> = (props: Props) => {
  const { setShifted } = props;

  const [cart, setCart] = React.useState<any | null>([]);

  React.useEffect(() => {
    const localItems = localStorage.getItem("cart");
    setCart(localItems);
  }, [setShifted, clearCart]);

  return (
    <>
      <h1>Shop</h1>
      {JSON.stringify(cart)}
      <p>
        Welcome to the Kuratorium shop. We are shipping out all products on a weekly basis. Should
        you have any questions, please write an email to shop@kuratorium.net. By ordering, you
        declare your acceptance of our terms and conditions, as well as the cancellation policy.{" "}
        <br />
        <a href="mailto:shop@kuratorium.net">shop@kuratorium.net</a>
      </p>
      {cart?.length > 0 ? (
        <>
          <div className="flex-2">
            <div className="inner">
              <span className="cursor underline" onClick={() => setShifted(false)}>
                Continue Shopping
              </span>
            </div>
            <div className="inner">
              <span className="cursor tar">
                <p className="tar cursor" onClick={() => clearCart()}>
                  Clear Cart
                </p>
              </span>
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
