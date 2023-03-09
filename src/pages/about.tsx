import { PartnerTestimonial } from '@components/partnerTestimonial';
import React from 'react';

const AboutUs = () => {
  return (
    <>
      <PartnerTestimonial
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
      {/* <Card
        button={{ children: 'REQUEST A QUOTE' }}
        title="Book a Quote"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      /> */}
    </>
  );
};

export default AboutUs;
