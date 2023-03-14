import { Button, Container, Image, Text } from '@dathaplus/storybook';
import React from 'react';

import {
  IconScrolled,
  bodyButton,
  bodyContainer,
  bodyDescription,
  bodyTitle,
  textBodyButton,
} from './styles';

export const BodyHero = () => {
  return (
    <Container {...bodyContainer}>
      <Text {...bodyTitle}>Luxury flights</Text>
      <Container>
        <Text {...bodyDescription}>private</Text>
        <Text {...bodyDescription}>jet charter</Text>
      </Container>
      <Button {...bodyButton}>
        <Text {...textBodyButton}>Book a flight</Text>
      </Button>

      <Image {...IconScrolled} src="/img/scroll.webp" />
    </Container>
  );
};
