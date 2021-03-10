import { NextPage } from "next";
import React from "react";
import About from "../components/about/about";
import Intro from "../components/intro/intro";
import Shop from "../components/shop/shop";
import { useMeasure } from "react-use";

interface Props {}

const Index: NextPage<Props> = (props: Props) => {
  const {} = props;

  const [ref, { width }] = useMeasure();
  return (
    <>
      <div className="row">
        <div
          className="intro"
          //@ts-ignore
          ref={ref}>
          <Intro />
        </div>
        <div className="about">
          <About />
        </div>
        <div className="projects"></div>
        <div className="feed"></div>
      </div>

      <div
        className="sideshop"
        style={{
          width: width,
          transform: `translateX(${width}px)`,
          marginRight: `-${width}px`,
        }}>
        <Shop />
      </div>
    </>
  );
};
export default Index;
