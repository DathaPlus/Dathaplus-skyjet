import { size } from '@dathaplus/storybook';
import { ITypography } from '@dathaplus/storybook/dist/interfaces/base/typograpy';
import { IContainer } from '@dathaplus/storybook/dist/interfaces/layout/container';

export const mainContainerStyle: IContainer = {
  styles: {
    padding: '1.5em',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: '400px',
    alignItems: 'end',
    mediaQueryBreakPoints: {
      [size.laptopL]: {
        height: '300px',
      },
    },
  },
};
export const childContainerStyle: IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    justifyContent: 'center',
  },
};
export const titleStyle: ITypography = {
  fontFamily: 'Inter',
  textTransform: 'uppercase',
  fontWeight: 600,
  fontSize: '18px',
  lineHeight: '22px',
  textDecoration: 'underline',
  color: '#A8987E',
  textAlign: 'left',
  entranceAnimate: 'fadeIn',
};

export const subtitleStyle: ITypography = {
  fontFamily: 'Inter',
  fontWeight: 300,
  fontSize: '48px',
  lineHeight: '58px',
  textAlign: 'left',
  margin: '.3em 0',
  entranceAnimate: 'fadeIn',
  mediaQueryBreakPoints: {
    [size.laptopL]: {
      fontSize: '36px',
    },
  },
};

export const paragraphStyle: ITypography = {
  fontFamily: 'Inter',
  fontWeight: 400,
  variant: 'body1',
  width: '100%',
  mediaQueryBreakPoints: {
    [size.laptopL]: {
      width: '63%',
    },
  },
};
