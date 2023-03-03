import React from 'react';
import { Container, Text, ContainerWrapper } from '@dathaplus/storybook';
import { ContainerFooter, WrapperFoot, descriptionText, headerText } from './styles';
import { Link } from '@components/link';

export const Footer = () => {
  return (
    <ContainerWrapper backgroundColor="#505055">
      <Container {...ContainerFooter}>
        <Container {...WrapperFoot}>
          <Container>
            <Text {...headerText}>Headquarters</Text>
            <Text {...descriptionText} textDecoration="initial" maxWidth="370px">
              1100 Lee Wagener Blvd #323, Fort, Lauderdale, FL 33305, USA
            </Text>
          </Container>

          <Container>
            <Text {...headerText}>Contact US</Text>
            <Link
              href="https://google.com"
              target="__black"
              text={{ ...descriptionText, children: '+1 (954) 399 - 9589' }}
            />
          </Container>
        </Container>

        <Container styles={{ marginTop: '1.5em' }}>
          <Link
            href="https://google.com"
            target="__black"
            text={{ ...descriptionText, children: 'Terms of service' }}
          />
          <Link
            href="https://google.com"
            target="__black"
            text={{ ...descriptionText, children: 'Privacy Policy' }}
          />
        </Container>
        <Text {...descriptionText} textDecoration="none" fontSize="14px" color="#d0c4af">
          &copy; Skyjet Elite 2022
        </Text>
      </Container>
    </ContainerWrapper>
  );
};
