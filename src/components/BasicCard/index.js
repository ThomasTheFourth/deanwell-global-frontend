import * as React from "react";
import CardContent from "@mui/material/CardContent";
import { Image, ImageContainer, SecondaryText, Container } from "./styles";
import Typography from "@mui/material/Typography";

export default function BasicCard({ release }) {
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
      <CardContent style={{ paddingTop: 8 }}>
        <Typography variant="h6" sx={{ fontSize: 16 }}>
          {artistName}
        </Typography>
        <SecondaryText>
          {releaseTitle} (DWGM-{catalogNumber})
        </SecondaryText>
      </CardContent>
    </Container>
  );
}
