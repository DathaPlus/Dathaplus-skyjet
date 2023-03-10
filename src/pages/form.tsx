import React, {Fragment} from 'react';
import Form from "@components/form";
import {NavbarMenu} from "@components/hero/header";
import {Container, Text} from "@dathaplus/storybook";
import {
  leftContainerStyle,
  mainContainerStyle,
  rightContainerStyle,
  textOurServicesStyle,
  textRequestFlightStyle
} from "@components/testForm";

export const FormPage = () => {
  return (
    <Fragment>
      <NavbarMenu img="logo2.webp"/>
      <Container {...mainContainerStyle}>
        <Container {...leftContainerStyle}>
          <Text {...textOurServicesStyle}>OUR SERVICE</Text>
          <Text {...textRequestFlightStyle}>Request Flight Quote</Text>
        </Container>
        <Container {...rightContainerStyle}>
          <Form/>
        </Container>
      </Container>
    </Fragment>
  );
};

export default FormPage;
