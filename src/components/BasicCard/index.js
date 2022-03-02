import * as React from "react";
import CardContent from "@mui/material/CardContent";
import { Image, ImageContainer, SecondaryText, Container } from "./styles";
import Typography from "@mui/material/Typography";

export default function BasicCard({ release }) {
  const image = `${release.attributes.main_image.data.attributes.formats.medium.url}`;
  const artistName = release.attributes.artist.data.attributes.name;
  const releaseTitle = release.attributes.title;
  const catalogNumber = release.attributes.catalog_number;
  return (
    <Container>
      <CardContent>
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>
        <Typography variant="h6">{artistName}</Typography>
        <SecondaryText>
          {releaseTitle} ({catalogNumber})
        </SecondaryText>
      </CardContent>
    </Container>
  );
}
