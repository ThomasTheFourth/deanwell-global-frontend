import React, { useState, useEffect } from "react";
import ArtistCard from "../../components/ArtistCard";
import { Container, LoaderImage, LoaderContainer, PageTitle } from "./styles";
import { backendUrl } from "../../constants/global";
import loader from "./loader.gif";
import { CardGridContainer } from '../../components/CardGridContainer/styles';

const Artists = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/api/artists?sort[0]=name:asc&populate=*`)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result.data);
        },
        () => {
          setData(null);
        }
      );
  }, []);

  return (
    <>
      <Container>
        <PageTitle variant="h1">Artists</PageTitle>
        <CardGridContainer>
          {data.map((artist) => (
            <ArtistCard key={artist.attributes.name} artist={artist} />
          ))}
        </CardGridContainer>
      </Container>
      {!data.length && (
        <LoaderContainer>
          <LoaderImage src={loader} />
        </LoaderContainer>
      )}
    </>
  );
};
export default Artists;
