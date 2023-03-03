import { ITypogragpyInterfaces, Text } from '@dathaplus/storybook';
import React, { AnchorHTMLAttributes, FC } from 'react';

export const Link: FC<
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'style'> & {
    text?: ITypogragpyInterfaces.ITypography;
  }
> = ({ text, ...props }) => (
  <a {...props} style={{ textDecoration: 'none', display: 'block', width: 'fit-content' }}>
    <Text {...text} />
  </a>
);
