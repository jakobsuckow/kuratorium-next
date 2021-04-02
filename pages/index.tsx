import { GetStaticProps, NextPage } from "next";
import React, { LegacyRef } from "react";
import About from "../components/about/about";
import Intro from "../components/intro/intro";
import Shop from "../components/shop/shop";
import Projects from "../components/projects/projects";
import Feed from "../components/feed/feed";
import { useMeasure } from "react-use";
import { getData } from "../services/airtable";
import { Album, News, Event, Merch } from "../@types";
import Row from "../components/row/row";
import Column from "../components/column/column";
import OutsideColumn from "../components/column/outsideColumn";
import { UseMeasureRef } from "react-use/lib/useMeasure";

interface Props {
  events: Event[];
  news: News[];
  albums: Album[];
  merch: Merch[];
}

const Index: NextPage<Props> = (props: Props) => {
  const { events, news, albums, merch } = props;

  const [ref, { width }] = useMeasure();

  const [shifted, setShifted] = React.useState<boolean>(false);

  return (
    <>
      <Row shifted={shifted} width={width + 8}>
        <Column
          lg
          //@ts-ignore
          ref={ref as UseMeasureRef<HTMLElement>}>
          <Intro setShifted={setShifted} />
        </Column>
        <Column>
          <About />
        </Column>
        <Column>
          <Projects albums={albums} merch={merch} setShifted={setShifted} shifted />
        </Column>
        <Column>
          <Feed events={events} news={news} />
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
  const events = await getData("Events");
  const news = await getData("Feed");
  const albums = await getData("Albums");
  const merch = await getData("Merch");
  return {
    props: {
      events,
      news,
      albums,
      merch,
    },
  };
};
