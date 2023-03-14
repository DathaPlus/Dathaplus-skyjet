import { Hero } from '@dathaplus/storybook';
import React from 'react';

import { NavbarMenu } from '../navbar';
import { BodyHero } from './body';
import { heroBaseStyles } from './styles';

export const HeroComponent = () => (
  <Hero
    {...heroBaseStyles}
    body={{
      info: <BodyHero />,
    }}
    header={<NavbarMenu />}
  />
);

export default HeroComponent;
