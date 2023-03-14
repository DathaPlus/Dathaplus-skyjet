import { ITypogragpyInterfaces as IT, size } from '@dathaplus/storybook';

export const textOption = ({ color = 'white' }): Omit<IT.ITypography, 'children'> => ({
  fontFamily: 'Inter',
  variant: 'body4',
  textTransform: 'uppercase',
  fontWeight: 500,
  mediaQueryBreakPoints: {
    [size.tabletL]: {
      fontWeight: 400,
      color,
    },
  },
});

export const textOptionNested: Omit<IT.ITypography, 'children'> = {
  fontFamily: 'Inter',
  variant: 'caption2',
  textTransform: 'uppercase',
  fontWeight: 400,
};

export const textOptionButton = ({ color = 'white' }): Omit<IT.ITypography, 'children'> => ({
  ...textOptionNested,
  variant: 'body4',
  mediaQueryBreakPoints: {
    [size.tabletL]: {
      color: `${color} !important`,
    },
  },
});
