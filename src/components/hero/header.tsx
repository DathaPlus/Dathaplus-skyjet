import React from 'react';
import { Navbar, Text } from '@dathaplus/storybook';
import { textOption, textOptionButton, textOptionNested } from './styles';

export const HeaderHero = () => (
  <Navbar
    logo={{
      src: '/img/logo1.webp',
      alt: 'logo1',
      type: 'image',
    }}
    options={[
      {
        ...textOption,
        children: 'about us',
        type: 'text',
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
          },
        ],
      },
      {
        ...textOption,
        type: 'text',
        children: 'Maintenance',
      },
      {
        ...textOption,
        type: 'text',
        children: 'contact us',
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
