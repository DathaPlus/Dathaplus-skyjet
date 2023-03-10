import { CustomNavigation } from '@components/navegationCarousel';
import {
  Carousel,
  CarouselModules,
  Container,
  ContainerWrapper,
  Image,
  Text,
} from '@dathaplus/storybook';
import { ITestimonial } from '@interfaces/testimonial';
import React, { FC, useEffect, useState } from 'react';

import {
  containerContent,
  customerName,
  customerPosition,
  fractionTestimonial,
  imgProps,
  testimonialMessage,
  titleProps,
  wrapperCustomer,
  wrapperImg,
  wrapperNavigation,
} from './styles';

export const Testimonial: FC<ITestimonial & { id: string; fraction?: string }> = ({
  customer,
  testimonial,
  id,
  fraction,
}) => {
  return (
    <>
      <Text {...titleProps}>partners testimonials</Text>
      <Container {...containerContent}>
        <Container {...wrapperImg}>
          <Image {...imgProps} src={customer.img} alt="partner testimonial" loading="lazy" />
          <Container {...wrapperCustomer}>
            <Text {...customerName}>{customer.name}</Text>
            <Text {...customerPosition}>{customer.position}</Text>
          </Container>
        </Container>

        <Container>
          <Text {...testimonialMessage}>{testimonial}</Text>
          <Container {...wrapperNavigation}>
            <CustomNavigation id={id} />
            <Text {...fractionTestimonial}>{fraction}</Text>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export const PartnerTestimonial: FC<{ data: ITestimonial[] }> = ({ data }) => {
  const ID = 'partner12';
  const [totalSlide, setTotalSlide] = useState<number | undefined>(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [fraction, setFraction] = useState('');

  useEffect(() => {
    setFraction(`${activeSlide + 1} / ${totalSlide}`);
  }, [activeSlide, totalSlide]);

  return (
    <ContainerWrapper padding="1em" margin="3em 0">
      <Carousel
        onInit={({ activeIndex }) => setActiveSlide(activeIndex)}
        onSlideChange={({ activeIndex }) => setActiveSlide(activeIndex)}
        handleTotalSlides={setTotalSlide}
        navigation={{
          prevEl: `#prev${ID}`,
          nextEl: `#next${ID}`,
        }}
        modules={[CarouselModules.Navigation, CarouselModules.Pagination]}
        Element={Testimonial}
        data={data.map((prev) => ({ ...prev, id: ID, fraction }))}
      />
    </ContainerWrapper>
  );
};
