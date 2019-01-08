import Layout from "../components/Layout";

export default () => (
  <Layout>
    <main>
      <section>
        <h1>Sunny Day</h1>
        <p>
          Want to work with us? email{" "}
          <a href="mailto:hi@sunnday.tech">hi@sunnyday.tech</a>
        </p>
      </section>
      <style jsx>
        {`
          h1 {
            font-size: 64px;
          }
        `}
      </style>
    </main>
  </Layout>
);
