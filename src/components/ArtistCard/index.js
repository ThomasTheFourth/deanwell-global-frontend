import * as React from "react";
import {
  Image,
  ImageContainer,
  SecondaryText,
  Container,
  ReleaseCardContent,
  ArtistName,
} from "./styles";

export default function ArtistCard({ artist }) {
  return (
    <Container>
      <ImageContainer>
        <Image src={artist.image} />
      </ImageContainer>
      <ReleaseCardContent>
        <ArtistName variant="h6">{artist.name}</ArtistName>
        <SecondaryText>{artist.description}</SecondaryText>
      </ReleaseCardContent>
    </Container>
  );
}
