import React, { FC } from 'react';

import { Container, ContainerWrapper, Image, Text } from '@dathaplus/storybook';
import { mainContainer } from './style';
import { ISectionAircraftManagement } from '@interfaces/sectionaircraftmanagement';

const SectionAircraftManagement: FC<ISectionAircraftManagement> = ({ image, title, info }) => (
  <ContainerWrapper>
    <Container {...mainContainer}>
      <Container
        styles={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          mediaQueryBreakPoints: {
            400: {
              flexDirection: 'row',
              alignItems: 'center',
              gap: '80px',
            },
            1000: {
              gap: '30px',
            },
          },
        }}
      >
        <Image
          scrollAnimate="fadeInUp"
          styles={{
            maxWidth: '160px', //
            height: '155px',
            display: 'block',
            objectFit: 'cover', // Se rescala la imagen
          }}
          src={image}
        />
        <Text
          fontFamily="Inter"
          fontWeight={400}
          fontSize="24px"
          color="#2A2A2D"
          tag="p"
          lineHeight="40px"
          mediaQueryBreakPoints={{
            400: {
              display: 'block',
              maxWidth: '200px',
            },
          }}
        >
          {title}
        </Text>
      </Container>
      <Container
        styles={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Text
          fontFamily="Inter"
          fontWeight={400}
          fontSize="16px"
          lineHeight="32px"
          color="#2A2A2D"
          display="block"
          maxWidth="445px"
        >
          {info}
        </Text>
      </Container>
    </Container>
  </ContainerWrapper>
);

export default SectionAircraftManagement;
