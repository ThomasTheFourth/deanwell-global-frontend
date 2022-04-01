import React, { useState, useEffect } from "react";
import ReleaseCard from "../../components/ReleaseCard";
import { Container, LoaderImage, LoaderContainer, PageTitle } from "./styles";
import { backendUrl } from "../../constants/global";
import loader from "./loader.gif";

const Releases = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/api/releases?sort[1]=catalog_number:desc&populate=*`)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result?.data) setData(result.data);
        },
        () => {
          setData(null);
        }
      );
  }, []);

  return (
    <>
      <Container>
        <PageTitle variant="h1">Releases</PageTitle>
        {data.map((release) => (
          <ReleaseCard
            key={release.attributes.catalog_number}
            release={release}
          />
        ))}
      </Container>
      {!data.length && (
        <LoaderContainer>
          <LoaderImage src={loader} />
        </LoaderContainer>
      )}
    </>
  );
};
export default Releases;
