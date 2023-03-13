import { IContainerInterfaces as IC, ITypogragpyInterfaces as IT } from '@dathaplus/storybook';

export const mainContainer: IC.IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 24px 0 24px',
    margin: '2em auto',
    maxWidth: '635px',
    mediaQueryBreakPoints: {
      770: {
        justifyContent: 'space-between',
      },
      1250: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '60px 0 10px 0',
        maxWidth: 'unset',
      },
    },
  },
};

export const titleStyles: IT.ITypography = {
  fontFamily: 'Inter',
  fontWeight: '300px',
  fontSize: '32px',
  lineHeight: '39px',
  color: '#2A2A2D',
  paddingBottom: '20px',
  mediaQueryBreakPoints: {
    770: {
      fontSize: '45px',
      maxWidth: '445px',
      lineHeight: '58px',
    },
  },
};

export const infoStyles: IT.ITypography = {
  fontFamily: 'Inter',
  fontWeight: '400px',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#2A2A2D',
  display: 'block',
  width: '100%',
  tag: 'p',
};
