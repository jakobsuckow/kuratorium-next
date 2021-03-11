import { GetStaticProps, NextPage } from "next";
import React, { LegacyRef } from "react";
import About from "../components/about/about";
import Intro from "../components/intro/intro";
import Shop from "../components/shop/shop";
import Projects from "../components/projects/projects";
import Feed from "../components/feed/feed";
import { useMeasure } from "react-use";
import { getData } from "../services/airtable";
import { Event } from "./api/event/all";
import { News } from "./api/news/all";
import { Album } from "../@types";

interface Props {
  events: Event[];
  news: News[];
  albums: Album[];
}

const Index: NextPage<Props> = (props: Props) => {
  const { events, news, albums } = props;

  const [ref, { width }] = useMeasure();

  const [shifted, setShifted] = React.useState<boolean>(false);

  return (
    <>
      <div
        className="row"
        style={{ transform: shifted ? `translateX(-${width}px)` : `translateX(-0px)` }}>
        <div className="intro" ref={ref as LegacyRef<HTMLDivElement>}>
          <Intro setShifted={setShifted} />
        </div>
        <div className="about">
          <About />
        </div>
        <div className="projects">
          <Projects albums={albums} />
        </div>
        <div className="feed">
          <Feed events={events} news={news} />
        </div>
      </div>
      <div
        className="sideshop"
        style={{
          width: width,
          transform: shifted ? `translateX(-${width}px)` : `translateX(${width}px)`,
          marginRight: `-${width}px`,
        }}>
        <Shop setShifted={setShifted} />
      </div>
    </>
  );
};
export default Index;

export const getStaticProps: GetStaticProps = async context => {
  const events = await getData("Events");
  const news = await getData("Feed");
  const albums = await getData("Albums");
  return {
    props: {
      events,
      news,
      albums,
    },
  };
};
