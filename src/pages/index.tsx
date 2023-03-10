import { CustomerInfo } from '@components/customer';
import Hero from '@components/hero';
import { Services } from '@components/sectionServices';
import { SEO } from '@components/seo';
import React from 'react';

export const IndexPage = () => {
  return (
    <>
      <Hero />
      <Services />
      <CustomerInfo />
    </>
  );
};

export const Head = () => (
  <SEO title="Home">
    <meta name="description" content="home" />
  </SEO>
);

export default IndexPage;
