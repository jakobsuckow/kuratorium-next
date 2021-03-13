import React, { Dispatch, SetStateAction } from "react";
import { Album, Merch } from "../../@types";
import { useLocalStorage } from "react-use";
import { addToCart } from "../../services/shoppingCart";

interface Props {
  albums: Album[];
  merch: Merch[];
  setShifted: Dispatch<SetStateAction<boolean>>;
  shifted: boolean;
}

const Releases: React.FC<Props> = (props: Props) => {
  const { albums, merch, setShifted } = props;
  const [size, setSize] = React.useState<string | number>(0);

  const clickHandler = (merch: Merch) => {
    if (size === 0) {
      alert("please select a size");
    } else {
      setShifted(true);
      addToCart({
        quantity: 1,
        id: merch.id,
        name: merch.name,
        price: merch.price,
        size: size as string,
      });
    }
  };

  return (
    <>
      <h1>Projects</h1>
      <p>
        Kuratorium is a collection of independent projects. The first project is curated by Lennart
        Wiehe and called ‘A New Need for Subtlety and Hiss’. Upon its release in early 2019, you can
        read all about it here.
      </p>
      {albums.map((album: Album, i: number) => (
        <div key={i}>
          <p>{album.artist}</p>
        </div>
      ))}
      <h1>Merch</h1>
      {merch.map((merch: Merch, index: number) => (
        <div className="product" key={index}>
          <p>{merch.name}</p>
          <p>{merch.description}</p> <br />
          <img src={merch.images[0].url} alt="" />
          <select
            name="sizes"
            id="sizes"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSize(e.target.value)}>
            <option value="0">choose size</option>
            {merch.sizes.map((size: string, index: number) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
          <div className="product_desc">
            <p className="price">{merch.price} €</p>
            <span className="add_to_cart" onClick={() => clickHandler(merch)}>
              Add to Cart
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Releases;
