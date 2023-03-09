import { Text } from '@dathaplus/storybook';
import { ILink } from 'interfaces/link';
import React, { FC } from 'react';

export const Link: FC<ILink> = ({ text, ...props }) => (
  <a {...props} style={{ textDecoration: 'none', display: 'block', width: 'fit-content' }}>
    <Text {...text} />
  </a>
);
