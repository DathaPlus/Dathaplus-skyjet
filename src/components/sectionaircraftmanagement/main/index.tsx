import {Container, ContainerWrapper, Image, Section, Text} from '@dathaplus/storybook';
import { ISectionAircraftManagement } from '@interfaces/sectionaircraftmanagement';
import React, { FC } from 'react';

import {
  imageStyleUno,
  mainContainer,
  mainContainer2,
  mainContainer3,
  mainContainer4,
  textInfo,
  textTitle,
} from '../style';

export const SectionAircraftManagement: FC<ISectionAircraftManagement> = ({ image, title, info }) => (

  <ContainerWrapper>
    <Container {...mainContainer}>
      <Container {...mainContainer2}>
        <Image {...imageStyleUno} scrollAnimate="fadeInUp" src={image} />
        <Container {...mainContainer3}>
          <Text {...textTitle}>{title}</Text>
        </Container>
      </Container>
      <Container {...mainContainer4}>
        <Text {...textInfo}>{info}</Text>
      </Container>
    </Container>
  </ContainerWrapper>
);

