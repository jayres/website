import Document, { Head, Main, NextScript } from "next/document";
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
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
            @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i|Source+Serif+Pro&subset=latin-ext);
            html { box-sizing: border-box; background-color: #f6f6f8; }
            *, *:before, *:after { box-sizing: inherit; }
            body { margin: 0; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; font-family: "Source Sans Pro",system-ui,sans-serif;  }
          `
            }}
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
