import { Container, ContainerWrapper, Text } from '@dathaplus/storybook';
import React, { FC } from 'react';
import { infoStyles, mainContainer, titleStyles, wrapperText } from './style';
import { IHeader } from '@interfaces/header';

export const Header: FC<IHeader> = ({ direction = 'horizontal', title, subtitle }) => (
  <Container {...mainContainer({ direction })}>
    <Container {...wrapperText({ direction })}>
      <Text {...titleStyles}>{title}</Text>
      <Text {...infoStyles}>{subtitle}</Text>
    </Container>
  </Container>
);
