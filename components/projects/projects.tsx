import React, { Dispatch, SetStateAction } from "react";
import { Album, Merch } from "../../@types";
import { addToCart } from "../../services/shoppingCart";
import Text from "../text/text";
import Underline from "../text/underline";
import StyledImage from "../image/styledImage";
import Block from "../text/block";

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
      <Block>
        Kuratorium is a collection of independent projects. The first project is curated by Lennart
        Wiehe and called ‘A New Need for Subtlety and Hiss’. Upon its release in early 2019, you can
        read all about it here.
      </Block>
      {albums.map((album: Album, i: number) => (
        <div key={i}>
          <b>{album.name}</b>
          <Block>{album.text}</Block>
          <StyledImage src={album.artwork[0].url} />
        </div>
      ))}
      <h1>Merch</h1>
      {merch.map((merch: Merch, index: number) => (
        <div key={index}>
          <Block>{merch.name}</Block>
          <Block>{merch.description}</Block>
          <StyledImage src={merch.images[0].url} alt="" />
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
          <Block>{merch.price} €</Block>
          <Underline onClick={() => clickHandler(merch)}>Add to Cart</Underline>
        </div>
      ))}
    </>
  );
};

export default Releases;
