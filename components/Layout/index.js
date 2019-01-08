import Head from "next/head";

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Sunny Day | A digital agency</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <style jsx global>
      {`
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Helvetica Neue, Helvetica, sans-serif;
          line-height: 1.5;
        }
      `}
    </style>
    {children}
  </div>
);

export default Layout;
