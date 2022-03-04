import React from "react";
import { Container } from "./styles";

export const Footer = () => {
  const date = new Date().getFullYear();
  return <Container>Copyright © {date} Deanwell Global Music</Container>;
};

export default Footer;
