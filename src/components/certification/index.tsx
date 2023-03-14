import { LinkComponent } from '@components/link';
import { Container, IImageInterfaces as IM, Image, Section } from '@dathaplus/storybook';
import React from 'react';

import {
  containerCertificate,
  containerChildren,
  imageContainer,
  linkProps,
  sectionStyles,
} from './styles';

const Certificate = ({
  href,
  img,
  delayAnimateImg,
}: {
  img?: string;
  href?: string;
  delayAnimateImg?: IM.IImage['delayAnimate'];
}) => (
  <Container {...containerCertificate}>
    <Image
      {...imageContainer}
      src={img}
      delayAnimate={delayAnimateImg}
      loading="lazy"
      alt="partners"
    />
    <LinkComponent {...linkProps} href={href} type="external" />
  </Container>
);

export const Certification = () => {
  return (
    <Section {...sectionStyles}>
      <Container {...containerChildren}>
        <Certificate href="https://google.com" img="/img/flight_leader.webp" />
        <Certificate
          href="https://google.com"
          img="/img/federal_aviation.webp"
          delayAnimateImg="1s"
        />
        <Certificate href="https://google.com" img="/img/argus_cheq.webp" delayAnimateImg="2s" />
      </Container>
    </Section>
  );
};
