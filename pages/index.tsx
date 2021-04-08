import { GetStaticProps, NextPage } from "next";
import React, { LegacyRef } from "react";
import About from "../components/about/about";
import Intro from "../components/intro/intro";
import Shop from "../components/shop/shop";
import Projects from "../components/projects/projects";
import Feed from "../components/feed/feed";
import { useMeasure } from "react-use";
import { getAlbums, getEvents, getLinks, getProducs } from "../services/strapi";
import { Album, Event, News, Product } from "../@types";
import Row from "../components/row/row";
import Column from "../components/column/column";
import OutsideColumn from "../components/column/outsideColumn";
import { UseMeasureRef } from "react-use/lib/useMeasure";
import Player from "../components/track/player";

interface Props {
  events: Event[];
  news: News[];
  albums: Album[];
  products: Product[];
}

const Index: NextPage<Props> = (props: Props) => {
  const { events, news, albums, products } = props;

  const [ref, { width }] = useMeasure();

  const [shifted, setShifted] = React.useState<boolean>(false);

  return (
    <>
      <Player width={width} shifted={shifted} />
      <Row shifted={shifted} width={width + 8}>
        <Column
          lg
          //@ts-ignore
          ref={ref}>
          <Intro setShifted={setShifted} />
        </Column>
        <Column>
          <About />
        </Column>
        <Column>
          <Projects albums={albums} products={products} setShifted={setShifted} shifted />
        </Column>
        <Column>
          <Feed events={events} news={news} shifted={shifted} />
        </Column>
      </Row>
      <OutsideColumn width={width + 8} shifted={shifted}>
        <Shop setShifted={setShifted} />
      </OutsideColumn>
    </>
  );
};
export default Index;

export const getStaticProps: GetStaticProps = async context => {
  const events = await getEvents();
  const news = await getLinks();
  const albums = await getAlbums();
  const products = await getProducs();
  return {
    props: {
      events,
      news,
      albums,
      products,
    },
  };
};
