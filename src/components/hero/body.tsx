import React from 'react';
import { Button, Container, Text } from '@dathaplus/storybook';
import { bodyButton, bodyContainer, bodyDescription, bodyTitle } from './styles';

export const BodyHero = () => {
  return (
    <Container {...bodyContainer}>
      <Text {...bodyTitle}>Luxury flights</Text>
      <Container>
        <Text {...bodyDescription}>private</Text>
        <Text {...bodyDescription}>jet charter</Text>
      </Container>

      <Button {...bodyButton}>
        <Text textTransform="uppercase">Book a flight</Text>
      </Button>
    </Container>
  );
};
