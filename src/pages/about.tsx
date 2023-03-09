import { Card } from '@components/card';
import { Certification } from '@components/certification';
import { Header } from '@components/header';
import { NavbarMenu } from '@components/hero/header';
import { OurValues } from '@components/ourValues';
import { PartnerTestimonial } from '@components/partnerTestimonial';
import { AirplaneSection } from '@components/sectionAirplane';
import { SEO } from '@components/seo';
import React from 'react';

const AboutUs = () => {
  return (
    <>
      <NavbarMenu img="logo2.webp" activateColorInTop />
      <Header title="about us" subtitle="Discover SkyJet Elite" />
      <OurValues />
      <AirplaneSection />
      <Certification />
      <PartnerTestimonial
        data={new Array(6).fill({
          testimonial: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              book."`,
          customer: {
            name: 'Jennie Smith',
            position: 'cargo',
          },
        })}
      />
      <Card
        img="/img/business.webp"
        button={{ children: 'REQUEST A QUOTE' }}
        title="Book a Quote"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
    </>
  );
};

export const Head = () => (
  <SEO title="About Us">
    <meta name="description" content="about_us" />
  </SEO>
);

export default AboutUs;
