import { Header } from '@components/header';
import { NavbarMenu } from '@components/hero/header';
import { InfoText } from '@components/infoText';
import {
  BodyAircraftManagement,
  SectionAircraftManagement,
} from '@components/sectionaircraftmanagement';
import {
  containerUno,
  mainTitleLeft,
  mainTitleRight,
  sectionAircraftMainImg,
  sectionAircraftTitle,
  wrapperInfoImage,
  wrapperInfoImg,
} from '@components/sectionaircraftmanagement/style';
import { Container, ContainerWrapper, Image, Section, Text } from '@dathaplus/storybook';
import { aircraftSectionImg, aircraftSectionsBodyManagement } from '@helpers/aircraft';
import React from 'react';

const AircraftManagement = () => {
  return (
    <>
      <main>
        <NavbarMenu img="logo2.webp" activateColorInTop />
        <Header title="about us" subtitle="Aircraft Management" />

        <ContainerWrapper margin="3em 0">
          <Container {...containerUno}>
            <InfoText textLeft={mainTitleLeft} textRight={mainTitleRight} />
          </Container>
        </ContainerWrapper>
      </main>

      <div>
        {aircraftSectionImg.map(({ title, img, info }, idx) => (
          <SectionAircraftManagement key={idx} image={img} title={title} info={info} />
        ))}
      </div>

      <Section padding="0" alignItems="center" backgroundColor={'#F5F3F1'}>
        <Container {...wrapperInfoImg}>
          <Container {...wrapperInfoImage}>
            <Image src={'/img/Rectangle22.png'} alt="Rectangle22" {...sectionAircraftMainImg} />
          </Container>
          <Container {...wrapperInfoImage}>
            <Text {...sectionAircraftTitle}>Our Private Air Charter Services offers</Text>
          </Container>
        </Container>

        {aircraftSectionsBodyManagement.map(({ title, content }, idx) => (
          <BodyAircraftManagement key={idx} title={title} info={content} />
        ))}
      </Section>
    </>
  );
};

export default AircraftManagement;
