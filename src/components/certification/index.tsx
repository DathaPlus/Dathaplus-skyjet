import { Container, Image, Section } from '@dathaplus/storybook';
import React from 'react';
import {
  containerCertificate,
  containerChildren,
  imageContainer,
  linkProps,
  sectionStyles,
} from './styles';
import { Link } from '@components/link';

const Certificate = ({ href, img }: { img?: string; href?: string }) => (
  <Container {...containerCertificate}>
    <Image {...imageContainer} src={img} />
    <Link {...linkProps} href={href} />
  </Container>
);

export const Certification = () => {
  return (
    <Section {...sectionStyles}>
      <Container {...containerChildren}>
        <Certificate href="https://google.com" img="/img/flight_leader.webp" />
        <Certificate href="https://google.com" img="/img/federal_aviation.webp" />
        <Certificate href="https://google.com" img="/img/argus_cheq.webp" />
      </Container>
    </Section>
  );
};
