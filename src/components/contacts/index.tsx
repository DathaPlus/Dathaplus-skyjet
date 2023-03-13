import {
  buttonStyles,
  containerButtonStyles,
  descriptionStyles,
  mainContainerStyles,
  titleStyles,
} from '@components/contacts/styles';
import { Button, Container, Text } from '@dathaplus/storybook';
import { IContacts } from '@interfaces/contacts';
import React, { FC } from 'react';

const Contacts: FC<IContacts> = ({ title, subtitle, emailButton, cellphoneButton }) => {
  return (
    <Container {...mainContainerStyles}>
      <Text {...titleStyles}>{title}</Text>
      <Text {...descriptionStyles}>{subtitle}</Text>
      <Container {...containerButtonStyles}>
        <Button {...buttonStyles} actions={{ onClick: cellphoneButton.onClick }}>
          {cellphoneButton.label}
        </Button>
        <Button {...buttonStyles} actions={{ onClick: emailButton.onClick }}>
          {emailButton.label}
        </Button>
      </Container>
    </Container>
  );
};
export default Contacts;
