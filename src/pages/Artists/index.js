import React from "react";
import ArtistCard from "../../components/ArtistCard";
import { Container, PageTitle } from "./styles";
import artistsData from "../../data/artists.json";

const Artists = () => {
  return (
    <Container>
      <PageTitle variant="h1">Artists</PageTitle>
      {artistsData.map((artist) => (
        <ArtistCard key={artist.name} artist={artist} />
      ))}
    </Container>
  );
};
export default Artists;
