import { Container, Text } from '@dathaplus/storybook';
import { IHeader } from '@interfaces/header';
import React, { FC } from 'react';

import { infoStyles, mainContainer, titleStyles, wrapperText } from './style';

export const Header: FC<IHeader> = ({ direction = 'horizontal', title, subtitle }) => (
  <Container {...mainContainer({ direction })}>
    <Container {...wrapperText({ direction })}>
      <Text {...titleStyles}>{title}</Text>
      <Text {...infoStyles}>{subtitle}</Text>
    </Container>
  </Container>
);
