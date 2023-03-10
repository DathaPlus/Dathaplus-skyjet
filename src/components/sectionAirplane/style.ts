import { ITypogragpyInterfaces as IT } from '@dathaplus/storybook';

export const titleSectionStyles: IT.ITypography = {
  fontFamily: 'Inter',
  fontWeight: 600,
  color: '#A8987E',
  fontSize: '18px',
  lineHeight: '22px',
  textDecoration: 'underline',
  mediaQueryBreakPoints: {
    400: {
      fontSize: '24px',
      lineHeight: '29px',
      margin: '2em 0',
    },
  },
};
