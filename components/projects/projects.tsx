import React from "react";
import { Album } from "../../@types";

interface Props {
  albums: Album[];
}

const Releases: React.FC<Props> = (props: Props) => {
  const { albums } = props;

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
    </>
  );
};

export default Releases;
