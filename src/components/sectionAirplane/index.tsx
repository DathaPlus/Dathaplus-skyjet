import { AirPlaneCarousel } from '@components/airplaneCarousel';
import { ContainerWrapper, Section, Text } from '@dathaplus/storybook';
import React from 'react';

import { titleSectionStyles } from './style';

export const AirplaneSection = () => {
  return (
    <Section backgroundColor="#F5F3F1">
      <ContainerWrapper padding="0 0 3.5em 0">
        <Text {...titleSectionStyles}>FLEET</Text>
        <AirPlaneCarousel
          title="Learjet 55"
          linkPhotos="https://google.com.ec"
          images={new Array(6).fill('/img/plane/learjet.webp')}
        />
        <AirPlaneCarousel
          title="Beechjet 400A N814SG"
          linkPhotos="https://google.com.ec"
          images={new Array(6).fill('/img/plane/beechjet.webp')}
        />
        <AirPlaneCarousel
          title="Gulfstream G100 SP"
          linkPhotos="https://google.com.ec"
          images={new Array(6).fill('/img/plane/gulfstream_g100.webp')}
        />
      </ContainerWrapper>
    </Section>
  );
};
