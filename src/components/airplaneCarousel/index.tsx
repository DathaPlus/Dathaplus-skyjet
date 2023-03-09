import { ButtonCarousel } from '@components/buttonCarousel';
import { LinkComponent } from '@components/link';
import {
  Carousel,
  CarouselModules,
  Container,
  ContainerWrapper,
  Image,
  Text,
} from '@dathaplus/storybook';
import { IAirPlane } from '@interfaces/airplane';
import React, { FC } from 'react';

import {
  containerSectionButtons,
  fractionCarousel,
  imgStyles,
  linkAllPhotosStyles,
  mainContainer,
  titleStyles,
  wrapperButtons,
  wrapperCarousel,
  wrapperFractionCarousel,
  wrapperTitle,
} from './style';

export const AirPlaneCarousel: FC<IAirPlane> = ({ title, images, linkPhotos }) => {
  const ID = 'airplane_1';

  return (
    <ContainerWrapper>
      <Container {...mainContainer}>
        <Container {...wrapperTitle}>
          <Text {...titleStyles}>{title}</Text>
        </Container>

        <Container {...wrapperCarousel}>
          <Carousel
            id={ID}
            Element={Image}
            data={images.map((src) => ({ ...imgStyles, src }))}
            slidesPerView={1}
            navigation={{
              prevEl: `#prev_${ID}`,
              nextEl: `#next_${ID}`,
            }}
            pagination={{
              el: `#fraction_${ID}`,
              type: 'fraction',
              renderBullet(index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
              },
            }}
            modules={[CarouselModules.Navigation, CarouselModules.Pagination]}
            ContainerEnd={
              <Container {...containerSectionButtons}>
                <Container {...wrapperButtons}>
                  <ButtonCarousel id={`prev_${ID}`} />
                  <ButtonCarousel id={`next_${ID}`} direction="right" />
                </Container>
                <Container {...wrapperFractionCarousel}>
                  <Text {...fractionCarousel(ID)} />
                </Container>
                <LinkComponent
                  text={linkAllPhotosStyles}
                  type="external"
                  href={linkPhotos}
                  target="_blank"
                />
              </Container>
            }
          />
        </Container>
      </Container>
    </ContainerWrapper>
  );
};
