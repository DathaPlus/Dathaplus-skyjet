import { Hero } from '@dathaplus/storybook';
import React from 'react';

import { BodyHero } from './body';
import { NavbarMenu } from './header';
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
