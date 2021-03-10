import React from "react";
import Head from "next/head";

import "../styles/index.scss";

export default function MyApp(props: any) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles: any = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
