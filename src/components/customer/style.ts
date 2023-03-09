import {
  size,
  IContainerInterfaces as IC,
  ITypogragpyInterfaces as IT,
} from '@dathaplus/storybook';

export const mainContainer: IC.IContainer = {
  styles: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1em',
    margin: '3em 0',
    mediaQueryBreakPoints: {
      [size.tabletM]: {
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url('./img/world.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: 'contain',
        padding: '5em 0',
        marginTop: '5em',
        paddingRight: '10%',
      },
    },
  },
};

export const wrapper: IC.IContainer = {
  styles: {
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    mediaQueryBreakPoints: {
      [size.tabletS]: {
        width: '70%',
      },
      [size.tabletL]: {
        width: '55%',
      },
      [size.desktopM]: {
        width: '40%',
      },
    },
  },
};

export const textStylesBase: IT.ITypography = {
  fontFamily: 'Inter',
  styleTheme: 'gray.gray600',
  textAlign: 'left',
  lineHeight: '55px',
  textTransform: 'uppercase',
};

export const asset: IT.ITypography = {
  ...textStylesBase,
  fontWeight: 600,
  fontSize: '28px',
  scrollAnimate: 'fadeIn',
  mediaQueryBreakPoints: {
    [size.tabletM]: {
      fontSize: '46px',
      lineHeight: '80px',
    },
  },
};

export const ourDedication: IT.ITypography = {
  ...textStylesBase,
  styleTheme: 'primary',
  fontWeight: 500,
  fontSize: '48px',
  scrollAnimate: 'fadeIn',
  mediaQueryBreakPoints: {
    [size.tabletM]: {
      fontSize: '62px',
      lineHeight: '80px',
    },
  },
};

export const wrapperVision: IC.IContainer = {
  styles: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '3em',
    mediaQueryBreakPoints: {
      [size.tabletM]: {
        marginTop: '5em',
      },
    },
  },
};

export const vision: IT.ITypography = {
  ...textStylesBase,
  maxWidth: '239px',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '18px',
  scrollAnimate: 'fadeInUp',
  textTransform: 'initial',
  mediaQueryBreakPoints: {
    [size.tabletM]: {
      fontSize: '14px',
      lineHeight: '21px',
    },
    [size.laptopM]: {
      maxWidth: '350px',
    },
  },
};
