import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { MainNav } from "components/navigation/MainNav";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Home Page</title>
          <link
            rel="stylesheet"
            href="/static/scss/custom-bootstrap-4.1.3.css"
          />
          {this.props.styleTags}
        </Head>
        <MainNav />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
