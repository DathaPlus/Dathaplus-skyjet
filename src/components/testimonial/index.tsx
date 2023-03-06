import React, { FC } from 'react';
import { Container, Image, Text } from '@dathaplus/storybook';
import { ITestimonial } from '@interfaces/testimonial';
import {
  citeTestimonial,
  containerCarousel,
  customerJob,
  customerName,
  imgCustomer,
  testimonialContainer,
  wrapperCustomerInfo,
} from './style';

export const Testimonial: FC<ITestimonial> = ({ testimonial, customer }) => {
  return (
    <Container {...containerCarousel}>
      <Container {...testimonialContainer}>
        <Container>
          <Text {...citeTestimonial}>{testimonial}</Text>
        </Container>

        <Container {...wrapperCustomerInfo}>
          <Image {...imgCustomer} />
          <Container>
            <Text {...customerName}>{customer.name}</Text>
            <Text {...customerJob}>{customer.position}</Text>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
