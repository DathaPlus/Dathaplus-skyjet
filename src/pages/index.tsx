import React from 'react';
import { CustomerInfo } from '@components/customer';
import { Footer } from '@components/footer';
import { SEO } from '@components/seo';
import Hero from '@components/hero/';
import { Services } from '@components/sectionServices';

export const IndexPage = () => {
  return (
    <>
      <Hero />
      <Services />
      <CustomerInfo />
      <Footer />
    </>
  );
};

export const Head = () => (
  <SEO title="Home">
    <meta name="description" content="home" />
  </SEO>
);

export default IndexPage;
