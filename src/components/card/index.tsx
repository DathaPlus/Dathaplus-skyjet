import { Button, Container, ContainerWrapper, Image, Text } from '@dathaplus/storybook';
import { ICard } from '@interfaces/card';
import React, { FC } from 'react';

import {
  buttonStyles,
  buttonTextStyles,
  descriptionStyles,
  imageStyles,
  mainContainerCard,
  titleStyles,
  wrapperContent,
  wrapperDescription,
} from './styles';

export const Card: FC<ICard> = ({ title, description, button, img }) => {
  return (
    <ContainerWrapper margin="2em 0">
      <Container {...mainContainerCard}>
        <Image {...imageStyles} src={img} />
        <Container {...wrapperContent}>
          <Text {...titleStyles}>{title}</Text>
          <Container {...wrapperDescription}>
            <Text {...descriptionStyles}>{description}</Text>
            <Button {...button} styles={buttonStyles}>
              <Text {...buttonTextStyles}>{button?.children}</Text>
            </Button>
          </Container>
        </Container>
      </Container>
    </ContainerWrapper>
  );
};
1;
