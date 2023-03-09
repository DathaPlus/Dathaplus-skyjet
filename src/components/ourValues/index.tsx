import {
  Container,
  ContainerWrapper,
  Image,
  Text,
  size,
  useLayoutWidth,
} from '@dathaplus/storybook';
import React from 'react';

import { descriptionStyles, imageProps, mainContainer, titleStyles, wrapperText } from './style';

export const OurValues = () => {
  const width = useLayoutWidth();

  return (
    <ContainerWrapper margin="1em">
      <Container {...mainContainer}>
        <Image
          {...imageProps}
          src={width < size.tabletL ? '/img/about_us_mobile.webp' : '/img/about_us.webp'}
        />

        <Container {...wrapperText}>
          <Text {...titleStyles}>OUR VALUES</Text>
          <Text {...descriptionStyles}>
            At SkyJet Elite, our mission is to proudly provide high quality, safe and reliable
            point-to-point private jet travel at high levels of efficiency, reliability and client
            satisfaction. We have full access to a growing fleet of highly desirable managed
            aircraft and 24/7 nationwide flight operations.
          </Text>

          <Text {...descriptionStyles}>
            In addition to our personalized customer service and decades of experience as operators
            and innovators, we characterize ourselves to be highly passionate about aviation. A
            feature that, with no doubt, will make the SkyJet Elite leadership team a robust
            aviation partner you can trust.
          </Text>
        </Container>
      </Container>
    </ContainerWrapper>
  );
};
