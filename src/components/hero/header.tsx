import { Navbar, Text } from '@dathaplus/storybook';
import React from 'react';

import { textOption, textOptionButton, textOptionNested } from './styles';

export const NavbarMenu = ({
  img = 'logo1.webp',
  activateColorInTop,
}: {
  img?: string;
  activateColorInTop?: boolean;
}) => (
  <Navbar
    logo={{
      src: `/img/${img}`,
      alt: 'logo',
      type: 'image',
      href: '/',
      width: '100%',
      height: '100%',
    }}
    activateColorInTop={activateColorInTop}
    options={[
      {
        ...textOption,
        children: 'about us',
        type: 'text',
        href: '/about',
        options: [
          {
            ...textOptionNested,
            type: 'text',
            children: 'aircraft management',
          },
          {
            ...textOptionNested,
            type: 'text',
            children: 'investment opportunities',
            href: '/about',
          },
        ],
      },
      {
        ...textOption,
        type: 'text',
        children: 'Maintenance',
        href: '/maintenance',
      },
      {
        ...textOption,
        type: 'text',
        children: 'contact us',
        href: '/contact',
      },
      {
        type: 'button',
        children: <Text {...textOptionButton}>Clients login</Text>,
        styles: {
          width: '100%',
          borderRadius: 0,
          styleTheme: 'secondary',
          backgroundColor: 'transparent',
        },
      },
      {
        type: 'button',
        children: (
          <Text {...textOptionButton} fontWeight={600}>
            Request a quote
          </Text>
        ),
        styles: {
          width: '100%',
          borderRadius: 0,
        },
      },
    ]}
  />
);
