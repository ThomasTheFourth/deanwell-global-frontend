import React, { useState, useEffect } from "react";
import ReleaseCard from "../../components/ReleaseCard";
import { Container, LoaderImage, LoaderContainer } from "./styles";
import { backendUrl } from "../../constants/global";
import loader from "./loader.gif";
import Typography from "@mui/material/Typography";

const Releases = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/api/releases?sort[1]=catalog_number:desc&populate=*`)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result.data);
        },
        (error) => {
          setData(null);
        }
      );
  }, []);

  return (
    <>
      <div>
        <Container>
          <Typography variant="h1" sx={{ fontSize: 32, gridColumn: "1 / -1" }}>
            Releases
          </Typography>
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
      </div>
    </>
  );
};
export default Releases;
