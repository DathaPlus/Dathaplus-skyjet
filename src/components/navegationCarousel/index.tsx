import { Container, Text } from '@dathaplus/storybook';
import React from 'react';
import { ButtonCarousel } from '@components/buttonCarousel';
import {
  containerButtons,
  containerCarouselInfo,
  infoStepperCarousel,
  wapperInfoStepper,
} from './style';

export const CustomNavigation = ({ id }: { id: string }) => {
  return (
    <Container {...containerCarouselInfo}>
      <Container {...containerButtons}>
        <ButtonCarousel disabled id={id} />
        <ButtonCarousel direction="right" id={id} />
      </Container>
      <Container {...wapperInfoStepper}>
        <Text {...infoStepperCarousel} />
      </Container>
    </Container>
  );
};
