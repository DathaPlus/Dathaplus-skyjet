import {
  Button,
  Container,
  Text,
  ContainerWrapper,
  Image,
  Section,
  InfoImage,
} from '@dathaplus/storybook';
import React from 'react';
import { InfoText } from '@components/infoText';
import {
  btnAircraft,
  imageAircraft,
  infoImgSection,
  listContainer,
  mainContainer,
  mainContainerAircraft,
  servicesSection,
  textAircraftDescription,
  textBtnAircraft,
} from './style';

export const Services = () => {
  return (
    <>
      <Section {...servicesSection}>
        <Container {...mainContainer}>
          <Container {...listContainer}>
            <InfoImage
              {...infoImgSection}
              image={{
                src: '/img/concierge.webp',
                alt: 'concierge',
                scrollAnimate: 'fadeInUp',
              }}
              info={{
                ...infoImgSection.info,
                children: 'Concierge',
                scrollAnimate: 'slideInLeft',
              }}
            />
            <InfoImage
              {...infoImgSection}
              direction="reverse"
              image={{
                src: '/img/travel_elite.webp',
                alt: 'travel_elite',
                scrollAnimate: 'fadeInUp',
              }}
              info={{
                ...infoImgSection.info,
                children: 'elite travel experience',
                scrollAnimate: 'slideInRight',
              }}
            />
            <InfoImage
              {...infoImgSection}
              image={{
                src: '/img/asistance.webp',
                alt: 'asistance',
                scrollAnimate: 'fadeInUp',
              }}
              info={{
                ...infoImgSection.info,
                children: 'safety',
                scrollAnimate: 'slideInLeft',
              }}
            />
          </Container>
        </Container>
      </Section>

      <ContainerWrapper padding="1.5em">
        <Container {...mainContainerAircraft}>
          <Button {...btnAircraft}>
            <Text {...textBtnAircraft}>View all services</Text>
          </Button>
        </Container>

        <InfoText
          textLeft={{
            ...textAircraftDescription,
            children: 'Aircraft Management',
            scrollAnimate: 'fadeInDown',
          }}
          textRight={{
            ...textAircraftDescription,
            scrollAnimate: 'fadeInDown',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '27px',
            children:
              'We offer customized Part 135 (Charter) and Part 91 (Private) aircraft management solutions. SkyJet Elite can maintain the safe operation of your aircraft and generate revenue through our air charter programs by chartering your aircraft, which helps defray the cost of ownership and provide ROI.',
          }}
        />

        <Image {...imageAircraft} src="/img/trust.webp" />
      </ContainerWrapper>
    </>
  );
};
