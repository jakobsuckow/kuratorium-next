import { NextPage } from "next";
import React from "react";
import About from "../components/about/about";
import Intro from "../components/intro/intro";
import Shop from "../components/shop/shop";
import Projects from "../components/projects/projects";
import Feed from "../components/feed/feed";
import { useMeasure } from "react-use";

interface Props {}

const Index: NextPage<Props> = (props: Props) => {
  const {} = props;

  const [ref, { width }] = useMeasure();

  const [shifted, setShifted] = React.useState<boolean>(false);

  return (
    <>
      <div className="row">
        <div
          className="intro"
          //@ts-ignore
          ref={ref}
          style={{ transform: shifted ? `translateX(-${width}px)` : "0px" }}>
          <Intro />
        </div>
        <div className="about">
          <About />
        </div>
        <div className="projects">
          <Projects />
        </div>
        <div className="feed">
          <Feed />
        </div>
      </div>

      <div
        className="sideshop"
        style={{
          transform: shifted ? `translateX(-${width}px)` : `translateX(${width}px)`,
          marginRight: `-${width}px`,
        }}>
        <Shop setShifted={setShifted} />
      </div>
    </>
  );
};
export default Index;
