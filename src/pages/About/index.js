import React from "react";
import { Container, PageTitle, SectionTitle, Paragraph } from "./styles";

const About = () => {
  return (
    <Container>
      <PageTitle variant="h1">About</PageTitle>
      <SectionTitle variant="h2">The Story</SectionTitle>
      <Paragraph>
        Deanwell Global Music was born out of a friendship spanning over two
        decades. Thomas Barnwell and Ian Deaton met playing in bands in the
        Atlanta DIY, punk, and metal scene and bonded over a shared love of film
        scores and obscure, niche genres that most people had never heard of.
      </Paragraph>
      <Paragraph>
        In 2010, the two started pursuing composing music for film and formed
        Deanwell Global Music LLC. The name is a combination of their last
        names &mdash; Barnwell and Deaton &mdash; and they tacked "Global Music"
        on the end to make it sound like some random publishing company from the
        1980s. Initially, the name was used as a publishing house for their own
        musical pursuits: film scores, solo projects, and bands they had played
        in.
      </Paragraph>
      <Paragraph>
        In 2013, they decided to transition the project into a full-fledged
        label with a focus on reissues and the kind of obscure, niche genres
        that had always caught their interest &mdash; synth-punk, post-punk,
        cold wave, goth, metal, grindcore, and everything in between.
      </Paragraph>
      <SectionTitle variant="h2">The Label</SectionTitle>
      <Paragraph>
        Based in Atlanta, Georgia, Deanwell Global Music is an independent label
        run by two friends who care deeply about the music they release. Every
        record in our catalog is something we personally love and believe
        deserves to be heard. We specialize in vinyl reissues, cassette tapes,
        and digital releases from artists working in corners of music that don't
        get enough attention.
      </Paragraph>
      <Paragraph>
        If it's weird, wonderful, and makes us hit repeat &mdash; it probably
        belongs on Deanwell.
      </Paragraph>
    </Container>
  );
};

export default About;
