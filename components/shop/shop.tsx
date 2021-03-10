import React from "react";

interface Props {}

const Shop: React.FC<Props> = (props: Props) => {
  const {} = props;
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
    </>
  );
};
export default Shop;
