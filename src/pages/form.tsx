import Form from '@components/form';
import { Header } from '@components/header';
import { NavbarMenu } from '@components/navbar';
import { rightContainerStyle } from '@components/testForm';
import { Container } from '@dathaplus/storybook';
import React, { Fragment } from 'react';

export const FormPage = () => {
  return (
    <Fragment>
      <NavbarMenu img="logo2.webp" color="black" colorClientsLogin="#A8987E" />
      <Container {...rightContainerStyle}>
        <Header title="our service" subtitle="Request Flight Quote" direction="vertical" />
        <Form />
      </Container>
    </Fragment>
  );
};

export default FormPage;
