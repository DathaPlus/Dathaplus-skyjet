import {
  IContainerInterfaces as IC,
  ITypogragpyInterfaces as IT,
  size,
} from '@dathaplus/storybook';
import { IHeader } from '@interfaces/header';

export const mainContainer = ({ direction }: Pick<IHeader, 'direction'>): IC.IContainer => ({
  styles: {
    backgroundColor: direction === 'horizontal' ? '#F5F3F1' : '#E4DFD7',
    width: '100%',
    height: direction === 'horizontal' ? '450px' : '803px',
    padding: '1.5em',
    display: 'flex',
    alignItems: 'center',
    mediaQueryBreakPoints: {
      [size.tabletL]: {
        width: direction === 'horizontal' ? '100%' : '50%',
      },
    },
  },
});

export const wrapperText = ({ direction }: Pick<IHeader, 'direction'>): IC.IContainer => ({
  styles: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    justifyContent: 'center',
    maxWidth: '600px',
    mediaQueryBreakPoints: {
      [size.tabletL]: {
        gap: '2em',
        flexDirection: direction === 'horizontal' ? 'row' : 'column',
        alignItems: direction === 'horizontal' ? 'center' : undefined,
        marginLeft: '18%',
      },
      [size.desktopS]: {
        marginLeft: '22%',
      },
    },
  },
});

export const titleStyles: IT.ITypography = {
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

export const infoStyles: IT.ITypography = {
  fontFamily: 'Inter',
  fontWeight: 300,
  textAlign: 'left',
  fontSize: '48px',
  lineHeight: '58px',
  color: '#2A2A2D',
  display: 'block',
  maxWidth: '400px',
  entranceAnimate: 'fadeInDown',
};
