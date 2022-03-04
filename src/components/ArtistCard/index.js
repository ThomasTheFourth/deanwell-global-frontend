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
  console.log(artist);
  const image = `${artist.attributes.main_image?.data?.attributes?.formats?.small?.url}`;
  const artistName = artist.attributes.name;
  const description = artist.attributes.description;
  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <ReleaseCardContent>
        <ArtistName variant="h6">{artistName}</ArtistName>
        <SecondaryText>{description}</SecondaryText>
      </ReleaseCardContent>
    </Container>
  );
}
