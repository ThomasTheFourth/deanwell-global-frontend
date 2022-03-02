import React, { useState, useEffect } from "react";
import BasicCard from "../../components/BasicCard";
import { Container } from "./styles";
import { backendUrl } from "../../constants/global";

const pageKey = "releases";

const Releases = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/api/${pageKey}?sort[0]=catalog_number:asc&populate=*`)
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
  console.log(data);

  return (
    <Container>
      {data.map((release) => (
        <BasicCard key={release.attributes.catalog_number} release={release} />
      ))}
    </Container>
  );
};
export default Releases;
