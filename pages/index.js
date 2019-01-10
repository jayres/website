import styled from "styled-components";

const Headline = styled.h1`
  color: ${props => (props.color ? props.color : "#000")};
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
  padding: 80px 40px;
  max-width: 1080px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  background-color: ${props => (props.color ? props.color : "#fff")};
`;

export default () => (
  <main>
    <Wrapper>
      <Section>
        <Headline>Sunny Day</Headline>
        <SubTitle>A digital studio based in NYC.</SubTitle>
      </Section>
    </Wrapper>

    <Wrapper color="#f5f5f5">
      <Section>
        <p>Capabilities</p>
        <ul>
          <li>Web Applications</li>
          <li>Apps</li>
          <li>Etc</li>
        </ul>
      </Section>
    </Wrapper>

    <Wrapper color="#0b72e8">
      <Section>
        <Headline color="#fff">
          Let's talk about your next project.
          <br />
          <a style={{ color: "#fff" }} href="mailto:hi@sunnday.tech">
            hi@sunnyday.tech
          </a>
        </Headline>
      </Section>
    </Wrapper>

    <Wrapper color="#000">
      <Section>
        <p style={{ color: "#fff" }}>Social</p>
      </Section>
    </Wrapper>
  </main>
);
