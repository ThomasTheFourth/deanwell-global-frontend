import React from "react";
import ReleaseCard from "../../components/ReleaseCard";
import FeaturedProductCard from "../../components/FeaturedProductCard";
import { Container, PageTitle } from "./styles";
import releasesData from "../../data/releases.json";
import featuredData from "../../data/featured.json";

const Releases = () => {
  return (
    <Container>
      <PageTitle variant="h1">Releases</PageTitle>
      <FeaturedProductCard featured={featuredData} />
      {releasesData.map((release) => (
        <ReleaseCard key={release.catalogNumber} release={release} />
      ))}
    </Container>
  );
};
export default Releases;
