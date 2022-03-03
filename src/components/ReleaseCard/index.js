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
  const image = `${release.attributes.main_image.data.attributes.formats.small.url}`;
  const artistName = release.attributes.artists.data
    .map((artist) => {
      return artist.attributes.name;
    })
    .join(" / ");
  const releaseTitle = release.attributes.title;
  const catalogNumber = release.attributes.catalog_number;
  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <ReleaseCardContent>
        <ArtistName variant="h6">{artistName}</ArtistName>
        <SecondaryText>
          {releaseTitle} (DWGM-{catalogNumber})
        </SecondaryText>
      </ReleaseCardContent>
    </Container>
  );
}
