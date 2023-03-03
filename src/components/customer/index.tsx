import React from 'react';
import { asset, mainContainer, ourDedication, vision, wrapper, wrapperVision } from './style';
import { Carousel, CarouselModules, Container, Text } from '@dathaplus/storybook';
import { CustomNavigation } from '@components/navegationCarousel';
import { Testimonial } from '@components/testimonial';

export const CustomerInfo = () => {
  return (
    <>
      <Container {...mainContainer}>
        <Container {...wrapper}>
          <Text {...asset}>your asset...</Text>
          <Text {...ourDedication}>Our</Text>
          <Text {...ourDedication}>dedication</Text>
          <Container {...wrapperVision}>
            <Text {...vision}>
              SkyJet Elite offers fully customizable solutions for any type of ownership program you
              desire. We strongly believe in transparency, professionalism and safety: all key
              factors required when managing your aircraft.
            </Text>
          </Container>
        </Container>
      </Container>
      <Carousel
        navigation={{
          prevEl: '#prev12',
          nextEl: '#next12',
        }}
        pagination={{
          el: '#fractionInfoSlide',
          type: 'fraction',
          renderBullet(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        }}
        modules={[CarouselModules.Navigation, CarouselModules.Pagination]}
        Element={Testimonial}
        ContainerEnd={<CustomNavigation id="12" />}
        data={[
          {
            testimonial: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              book."`,
            customer: {
              name: 'Jennie Smith',
              position: 'cargo',
            },
          },
          {
            testimonial: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              book."`,
            customer: {
              name: 'Jennie Smith',
              position: 'cargo2',
            },
          },
          {
            testimonial: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              book."`,
            customer: {
              name: 'Jennie Smith',
              position: 'cargo3',
            },
          },
        ]}
      />
    </>
  );
};
