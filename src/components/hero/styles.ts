//---------------HERO--------------------//
import {
  IButtonInterfaces as IB,
  IContainerInterfaces as IC,
  IHeroInterfaces as IH,
  IImageInterfaces as IM,
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

export const textBodyButton: IT.ITypography = {
  textTransform: 'uppercase',
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '14px',
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
  fontFamily: 'Antonio',
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

export const IconScrolled: Omit<IM.IImage, 'src'> = {
  width: '100%',
  height: '100%',
  styles: {
    maxWidth: 'fit-content',
    height: 'fit-content',
    display: 'block',
    margin: '3em 0 0',
    objectFit: 'contain',
    objectPosition: 'center',
    mediaQueryBreakPoints: {
      600: {
        display: 'none',
      } as any,
    },
  },
};
