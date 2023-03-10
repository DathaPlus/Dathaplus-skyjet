import React, { FC } from 'react';
import { ButtonCarousel } from '@components/buttonCarousel';
import { Container, Text } from '@dathaplus/storybook';
import { INavigation } from '@interfaces/navigation';
import {
  containerButtons,
  containerCarouselInfo,
  infoStepperCarousel,
  wapperInfoStepper,
} from './style';

export const CustomNavigation: FC<INavigation> = ({ id, variant, idFraction }) => {
  return (
    <Container {...containerCarouselInfo({ variant })}>
      <Container {...containerButtons}>
        <ButtonCarousel disabled id={`prev${id}`} />
        <ButtonCarousel direction="right" id={`next${id}`} />
      </Container>
      <Container {...wapperInfoStepper}>
        <Text {...infoStepperCarousel} id={idFraction} />
      </Container>
    </Container>
  );
};
