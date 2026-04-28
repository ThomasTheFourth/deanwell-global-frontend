import React from "react";
import ReleaseCard from "../../components/ReleaseCard";
import { Container, PageTitle, Tagline } from "./styles";
import releasesData from "../../data/releases.json";

const Releases = () => {
  return (
    <Container>
      <PageTitle variant="h1">Releases</PageTitle>
      <Tagline>Obscure sounds, new and old, since 2011</Tagline>
      {releasesData.map((release) => (
        <ReleaseCard key={release.catalogNumber} release={release} />
      ))}
    </Container>
  );
};
export default Releases;
