import React, { Dispatch, SetStateAction } from "react";
import { Album, Product, SKU, Track } from "../../@types";
import Text from "../text/text";
import Block from "../text/block";
import Button from "../button/button";
import Flex from "../flex/flex";
import StyledSelect from "../forminput/styledSelect";
import Image from "next/image";
import Inner from "../column/inner";
import { GlobalDataContext } from "../../services/globalDataProvider";
import Underline from "../text/underline";

interface Props {
  albums: Album[];
  products: Product[];
  setShifted: Dispatch<SetStateAction<boolean>>;
  shifted: boolean;
}

const Releases: React.FC<Props> = (props: Props) => {
  const { albums, products, setShifted } = props;
  const [size, setSize] = React.useState<string | number>(0);

  const { setCurrentTrack, addToCart } = React.useContext(GlobalDataContext);

  const addProductToCart = (product: Product) => {
    if (size === 0) {
      alert("please select a size");
    } else {
      setShifted(true);
      addToCart({
        id: product.uuid,
        image: product.image.formats.thumbnail.url,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }
  };

  const addAlbumToCart = (album: Album) => {
    setShifted(true);
    addToCart({
      id: album.uuid,
      image: album.cover.formats.thumbnail.url,
      name: album.title,
      price: 20,
      quantity: 1,
    });
  };

  return (
    <Inner>
      <Block>
        Kuratorium is a collection of independent projects. The first project is curated by Lennart
        Wiehe and called ‘A New Need for Subtlety and Hiss’. Upon its release in early 2019, you can
        read all about it here.
      </Block>
      {albums.map((album: Album, i: number) => (
        <div key={i}>
          <Text>{album.title}</Text>
          <Block>{album.description}</Block>
          <Image
            loading="eager"
            src={album.cover.url}
            width={album.cover.width}
            height={album.cover.height}
            layout="responsive"
            alt={album.description}
          />
          {album.tracks.map((track: Track, i: number) => (
            <Underline key={i} onClick={() => setCurrentTrack(track)}>
              {track.title}
            </Underline>
          ))}
          <Button onClick={() => addAlbumToCart(album)}>Add to Cart</Button>
        </div>
      ))}
      <h1>Merch</h1>
      {products.map((product: Product, index: number) => (
        <div key={index}>
          <Block>{product.title}</Block>
          <Block>{product.description}</Block>
          <Image
            src={product.image.formats.small.url}
            width={product.image.formats.small.width}
            height={product.image.formats.small.height}
            layout="responsive"
            alt={product.description}
          />

          <StyledSelect
            name="sizes"
            id="sizes"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSize(e.target.value)}>
            <option value="0">choose size</option>
            {product.skus.map((sku: SKU) => (
              <option key={sku.slug} value={sku.slug}>
                {sku.size}
              </option>
            ))}
          </StyledSelect>

          <Flex>
            <Text>{product.price} €</Text>
            <Button noBorder onClick={() => addProductToCart(product)}>
              Add to Cart
            </Button>
          </Flex>
        </div>
      ))}
    </Inner>
  );
};

export default Releases;
