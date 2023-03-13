/* eslint-disable no-console */
import Contacts from '@components/contacts';
import { NavbarMenu } from '@components/navbar';
import QuestionsContact from '@components/questionsContact';
import { SEO } from '@components/seo';
import { Container } from '@dathaplus/storybook';
import { HeadFC } from 'gatsby';
import * as React from 'react';

const Contact = () => {
  return (
    <>
      <NavbarMenu img="logo2.webp" activateColorInTop />
      <Container
        styles={{ marginTop: '8em', mediaQueryBreakPoints: { 600: { marginTop: '5em' } } }}
      >
        <QuestionsContact />
        <Contacts
          title="Headquarters"
          subtitle="1100 Lee Wagner Blvd Suite 323 Fort Lauderdale, FL 33315"
          cellphoneButton={{ label: '+1 (918) 309-2135', onClick: () => console.log('si') }}
          emailButton={{ label: 'EMAIL', onClick: () => console.log('si') }}
        />
        <Contacts
          title="Representative in Colombia"
          subtitle="Gustavo A. Esguerra"
          cellphoneButton={{ label: '+57 3238143907', onClick: () => console.log('si') }}
          emailButton={{ label: 'EMAIL', onClick: () => console.log('si') }}
        />
      </Container>
    </>
  );
};
export default Contact;

export const Head: HeadFC = () => (
  <SEO title="Contact Us">
    <meta name="description" content="contact_us" />
  </SEO>
);
