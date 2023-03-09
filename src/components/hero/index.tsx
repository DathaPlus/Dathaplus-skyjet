import { Hero } from '@dathaplus/storybook';
import React from 'react';
import { BodyHero } from './body';
import { HeaderHero } from './header';
import { heroBaseStyles } from './styles';

export const HeroComponent = () => (
  <Hero
    {...heroBaseStyles}
    body={{
      info: <BodyHero />,
    }}
    header={<HeaderHero />}
  />
);

export default HeroComponent;
