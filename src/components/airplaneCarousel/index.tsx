import React, { FC } from 'react';
import {
  Container,
  Image,
  Text,
  Carousel,
  CarouselModules,
  ContainerWrapper,
} from '@dathaplus/storybook';
import { IAirPlane } from '@interfaces/airplane';
import {
  containerSectionButtons,
  fractionCarousel,
  imgStyles,
  linkAllPhotosStyles,
  mainContainer,
  wrapperButtons,
  wrapperCarousel,
  wrapperFractionCarousel,
  wrapperTitle,
} from './style';
import { ButtonCarousel } from '@components/buttonCarousel';
import { Link } from '@components/link';

export const AirPlaneCarousel: FC<IAirPlane> = ({ title, images }) => {
  const ID = 'airplane_1';

  return (
    <ContainerWrapper>
      <Container {...mainContainer}>
        <Container {...wrapperTitle}>
          <Text {...title} />
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
                <Link text={linkAllPhotosStyles} />
              </Container>
            }
          />
        </Container>
      </Container>
    </ContainerWrapper>
  );
};
