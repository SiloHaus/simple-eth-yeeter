import { Bold, H2, Link, ParMd, SingleColumnLayout } from "@daohaus/ui";
import styled from "styled-components";
import { ABOUTLINKS, TARGETS } from "../targetDao";

const ContentBox = styled.div`
  h2 {
    margin-bottom: 4rem;
  }
  max-width: 70rem;
  p {
    margin-bottom: 2rem;
  }
`;

export const About = () => {
  return (
    <SingleColumnLayout>
      <ContentBox>
        <H2>As a member what's next?</H2>
        <ParMd>
          <Bold>Join</Bold>
          {" "}
          <Link
            href={ABOUTLINKS.discord}
            style={{ marginBottom: "2rem" }}
          >
            Discord
          </Link>
        </ParMd>
        <ParMd>
          <Bold>Follow us on</Bold>
          {" "}
          <Link
            href={ABOUTLINKS.twitter}
            style={{ marginBottom: "2rem" }}
          >
            Twitter
          </Link>
        </ParMd>
        <ParMd>
          <Bold>Go to SiloHaus</Bold> {" "}
          <Link
            href={`https://admin.daohaus.fun/#/molochv3/${TARGETS.CHAIN_ID}/${TARGETS.DAO_ADDRESS}`}
            style={{ marginBottom: "2rem" }}
          >
            DAO Admin
          </Link>
        </ParMd>
        <ParMd>
          <Bold>Open source Yeeter</Bold> {" "}
          <Link
            href={ABOUTLINKS.github}
            style={{ marginBottom: "2rem" }}
          >
            Repo
          </Link>
        </ParMd>
      </ContentBox>
    </SingleColumnLayout>
  );
};
