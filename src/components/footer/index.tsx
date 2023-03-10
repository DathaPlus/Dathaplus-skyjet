import { LinkComponent } from '@components/link';
import { Container, ContainerWrapper, Text } from '@dathaplus/storybook';
import React from 'react';

import { ContainerFooter, WrapperFoot, copyRight, descriptionText, headerText } from './styles';

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
            <LinkComponent
              href="https://google.com"
              target="__black"
              type="external"
              text={{ ...descriptionText, children: '+1 (954) 399 - 9589' }}
            />
          </Container>
        </Container>

        <Container styles={{ marginTop: '1.5em' }}>
          <LinkComponent
            href="https://google.com"
            target="__black"
            type="external"
            text={{ ...descriptionText, children: 'Terms of service' }}
          />
          <LinkComponent
            href="https://google.com"
            target="__black"
            type="external"
            text={{ ...descriptionText, children: 'Privacy Policy' }}
          />
        </Container>
        <Text {...copyRight}>&copy; Skyjet Elite 2022</Text>
      </Container>
    </ContainerWrapper>
  );
};
