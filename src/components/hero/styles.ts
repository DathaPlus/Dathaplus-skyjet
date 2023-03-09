//---------------HERO--------------------//

import {
  IHeroInterfaces as IH,
  IContainerInterfaces as IC,
  IButtonInterfaces as IB,
  ITypogragpyInterfaces as IT,
  size,
} from '@dathaplus/storybook';

export const heroBaseStyles: Omit<IH.IHero, 'body' | 'header'> = {
  backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(/img/bg1.webp)',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  size: 'full_height',
};

//-----------------BODY------------------//

export const bodyContainer: IC.IContainer = {
  styles: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '2em',
    alignItems: 'center',
  },
};

export const bodyButton: IB.IButton = {
  entranceAnimate: 'fadeInDown',
  styles: {
    borderRadius: '0',
    backgroundColor: '#a8987e',
    border: 'unset',
    color: 'black',
  },
};

export const bodyTitle: IT.ITypography = {
  textTransform: 'uppercase',
  color: '#a8987e',
  variant: 'h3',
  textDecoration: 'underline',
  fontFamily: 'Inter',
  fontWeight: 600,
  entranceAnimate: 'slideInDown',
};

export const bodyDescription: IT.ITypography = {
  textAlign: 'center',
  textTransform: 'uppercase',
  fontSize: '28px',
  lineHeight: 'unset',
  fontWeight: 200,
  letterSpacing: '0.6em',
  color: 'white',
  entranceAnimate: 'fadeInUp',
  mediaQueryBreakPoints: {
    300: {
      fontSize: '38px',
    },
    630: {
      fontSize: '64px',
    },
  },
};

//----------------NAVBAR-------------------------//

export const textOption: Omit<IT.ITypography, 'children'> = {
  fontFamily: 'Inter',
  variant: 'body4',
  textTransform: 'uppercase',
  fontWeight: 500,
  mediaQueryBreakPoints: {
    [size.tabletL]: {
      fontWeight: 400,
      color: 'white',
    },
  },
};

export const textOptionNested: Omit<IT.ITypography, 'children'> = {
  fontFamily: 'Inter',
  variant: 'caption2',
  textTransform: 'uppercase',
  fontWeight: 400,
};

export const textOptionButton: Omit<IT.ITypography, 'children'> = {
  ...textOptionNested,
  variant: 'body4',
  mediaQueryBreakPoints: {
    [size.tabletL]: {
      color: 'white !important',
    },
  },
};
