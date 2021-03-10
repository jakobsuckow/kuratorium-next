import { NextPage } from "next";
import React from "react";
import About from "../components/about/about";
import Intro from "../components/intro/intro";
import Shop from "../components/shop/shop";

interface Props {}

const width: number = 479.984375;

const Index: NextPage<Props> = (props: Props) => {
  const {} = props;
  return (
    <>
      <div className="row">
        <div className="intro">
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
