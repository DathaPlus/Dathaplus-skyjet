import {
  childContainerStyle,
  mainContainerStyle,
  paragraphStyle,
  subtitleStyle,
  titleStyle,
} from '@components/questionsContact/styles';
import { Container, Text } from '@dathaplus/storybook';
import React from 'react';

const QuestionsContact = () => {
  return (
    <Container {...mainContainerStyle}>
      <Container {...childContainerStyle}>
        <Text {...titleStyle}>CONTACT US</Text>
        <Text {...subtitleStyle}>Do you have any questions?</Text>
        <Text {...paragraphStyle}>
          Then please get in touch at any time. Whether it’s support or sales, our employees know
          their stuff and will certainly be able to help you.
        </Text>
      </Container>
    </Container>
  );
};
export default QuestionsContact;
