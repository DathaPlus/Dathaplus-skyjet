import React, { FC } from 'react';
import { Container, ContainerWrapper, Image, Text, Button } from '@dathaplus/storybook';
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
import { ICard } from '@interfaces/card';

export const Card: FC<ICard> = ({ title, description, button }) => {
  return (
    <ContainerWrapper>
      <Container {...mainContainerCard}>
        <Image {...imageStyles} />
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
