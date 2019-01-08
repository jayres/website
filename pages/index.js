import Layout from "../components/Layout";
import styled from "styled-components";

const Headline = styled.h1`
  font-size: 48px;
  @media (min-width: 768px) {
    font-size: 64px;
  }
`;

const SubTitle = styled.h2`
  font-weight: normal;
  margin-bottom: 50px;
`;

const Section = styled.section`
  max-width: 608px;
`;

export default () => (
  <Layout>
    <main>
      <Section>
        <Headline>Sunny Day</Headline>
        <SubTitle>
          A digital studio building maintainable and performant applications,
          platforms, and websites.
        </SubTitle>
        <p>
          Want to work with us? email{" "}
          <a href="mailto:hi@sunnday.tech">hi@sunnyday.tech</a>
        </p>
      </Section>
    </main>
  </Layout>
);
