import React, { useEffect, useState } from "react";

interface Props {}

const Releases: React.FC<Props> = (props: Props) => {
  const {} = props;
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <h1>Projects</h1>

      {isLoading ? (
        <div className="loading">Loading Music... &nbsp;</div>
      ) : (
        <>
          <p>
            Kuratorium is a collection of independent projects. The first project is curated by
            Lennart Wiehe and called ‘A New Need for Subtlety and Hiss’. Upon its release in early
            2019, you can read all about it here.
          </p>
          <br />
        </>
      )}
      {isLoading ? (
        <>
          <div className="loading">Loading Merch... &nbsp;</div>
        </>
      ) : (
        <>
          {products.map(item => (
            <></>
          ))}
        </>
      )}
    </>
  );
};

export default Releases;
