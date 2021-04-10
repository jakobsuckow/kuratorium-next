import React from "react";
import Head from "next/head";
import { AppProps } from "next/dist/next-server/lib/router/router";
import GlobalDataProvider from "../services/globalDataProvider";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyle from "../services/globalStyle";
import { Html } from "next/document";

export default function MyApp(props: AppProps) {
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
      <ThemeProvider theme={theme}>
        <GlobalDataProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </GlobalDataProvider>
      </ThemeProvider>
    </>
  );
}
