import React from "react";
import {
  Container,
  Copyright,
  Tagline,
  SocialLinks,
  SocialLink,
} from "./styles";

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Container>
      <SocialLinks>
        <SocialLink
          href="https://deanwellglobalmusic.bandcamp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bandcamp
        </SocialLink>
        <SocialLink
          href="https://instagram.com/deanwellglobalmusic"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </SocialLink>
      </SocialLinks>
      <Copyright>
        Copyright &copy; 2011-{date} Deanwell Global Music
      </Copyright>
      <Tagline>Run with love from Atlanta, GA</Tagline>
    </Container>
  );
};

export default Footer;
