import * as React from "react";
import {
  Image,
  ImageContainer,
  SecondaryText,
  Container,
  ReleaseCardContent,
  ArtistName,
} from "./styles";

export default function ReleaseCard({ release }) {
  return (
    <Container>
      <ImageContainer>
        <Image src={release.image} />
      </ImageContainer>
      <ReleaseCardContent>
        <ArtistName variant="h6">{release.artists.join(" / ")}</ArtistName>
        <SecondaryText>
          {release.title} (DWGM-{release.catalogNumber})
        </SecondaryText>
      </ReleaseCardContent>
    </Container>
  );
}
