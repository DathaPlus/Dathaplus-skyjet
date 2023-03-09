import {
  IContainerInterfaces as IC,
  IButtonInterfaces as IB,
  ITypogragpyInterfaces as IT,
  ISectionInterfaces as IS,
  size,
  IInfoImageInterfaces as IFM,
  IImageInterfaces as IM,
} from '@dathaplus/storybook';

//-------------------INFO-IMG-------------------//

export const servicesSection: IS.ISection = {
  title: {
    children: 'Our Services',
    fontWeight: 'bold',
    marginBottom: '26px',
    marginTop: '35px',
    styleTheme: 'primary',
    textAlign: 'center',
    textDecoration: 'underline',
    textTransform: 'uppercase',
    mediaQueryBreakPoints: {
      [size.tabletM]: {
        fontSize: '24px',
        lineHeight: '29px',
      },
    },
  },
};

export const mainContainer: IC.IContainer = {
  styles: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },
};

export const listContainer: IC.IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2em',
    justifyContent: 'center',
  },
};

export const infoImgSection: IFM.IInfoImg = {
  info: {
    fontSize: 'clamp(1.5375rem, 0.5028rem + 1.556vw, 3.5rem)',
    maxWidth: '270px',
    textTransform: 'capitalize',
  },
};

//-----------------------Aircraft Management-----------------//

export const mainContainerAircraft: IC.IContainer = {
  styles: { display: 'grid', placeContent: 'center', margin: '5em 0' },
};

export const btnAircraft: IB.IButton = {
  scrollAnimate: 'slideInLeft',
  styles: {
    borderRadius: '0',
    backgroundColor: 'transparent',
    border: 'solid #2A2A2D 1px',
  },
};

export const textBtnAircraft: IT.ITypography = {
  textTransform: 'uppercase',
  color: '#2A2A2D',
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '18px',
  lineHeight: '22px',
};

export const textAircraftDescription: IT.ITypography = {
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '36px',
  lineHeight: '44px',
  color: '#2A2A2D',
  tag: 'p',
};

export const imageAircraft: IM.IImage = {
  alt: 'trust',
  scrollAnimate: 'slideInUp',
  styles: {
    margin: '3em 0',
    width: '100%',
    display: 'block',
    objectFit: 'cover',
    height: '252px',
    mediaQueryBreakPoints: {
      [size.tabletM]: {
        margin: '7em 0 5em 0',
        height: 'unset',
      },
    },
  },
};
