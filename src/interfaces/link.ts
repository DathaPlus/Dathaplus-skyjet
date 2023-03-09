import { ITypogragpyInterfaces } from '@dathaplus/storybook';
import { AnchorHTMLAttributes } from 'react';

export type ILink = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'style'> & {
  text?: ITypogragpyInterfaces.ITypography;
};
