import { Container, Text } from '@dathaplus/storybook';
import { IInfoText } from '@interfaces/infoText';
import React, { FC } from 'react';
import { mainContainer } from './style';
export const InfoText: FC<IInfoText> = ({ direction, textLeft, textRight }) => {
  return (
    <Container {...mainContainer(direction)}>
      <Container styles={{ flex: '1' }}>
        <Text {...textLeft} />
      </Container>
      <Container styles={{ flex: '1' }}>
        <Text {...textRight} />
      </Container>
    </Container>
  );
};
