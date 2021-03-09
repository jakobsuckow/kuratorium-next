import { NextPage } from "next";
import React from "react";

interface Props {}

const width: number = 479.984375;

const Index: NextPage<Props> = (props: Props) => {
  const {} = props;
  return (
    <>
      <div className="row">
        <div className="intro"></div>
        <div className="about"></div>
        <div className="projects"></div>
        <div className="feed"></div>
      </div>

      <div
        className="sideshop"
        style={{
          width: width,
          transform: `translateX(${width}px)`,
          marginRight: `-${width}px`,
        }}></div>
    </>
  );
};
export default Index;
