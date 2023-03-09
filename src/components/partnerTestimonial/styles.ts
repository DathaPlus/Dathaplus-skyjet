import {
  IContainerInterfaces as IC,
  IImageInterfaces as IM,
  ITypogragpyInterfaces as IT,
  size,
} from '@dathaplus/storybook';

export const titleProps: IT.ITypography = {
  textTransform: 'uppercase',
  styleTheme: 'primary',
  textDecoration: 'underline',
  display: 'block',
  textAlign: 'center',
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '18px',
  lineHeight: '21px',
};

export const containerContent: IC.IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2em',
    marginTop: '2.5em',
    mediaQueryBreakPoints: {
      [size.tabletS]: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '5em',
      },
    },
  },
};

export const wrapperImg: IC.IContainer = {
  styles: {
    display: 'flex',
    gap: '1.5em',
    alignItems: 'flex-end',
    mediaQueryBreakPoints: {
      [size.tabletS]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
  },
};

export const imgProps: Omit<IM.IImage, 'src'> = {
  alt: 'asset1',
  width: '100%',
  height: '100%',
  styles: {
    maxWidth: '160px',
    objectFit: 'cover',
    objectPosition: 'center',
    mediaQueryBreakPoints: {
      [size.tabletS]: {
        width: '140px',
      },
    },
  },
};

export const wrapperCustomer: IC.IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '.2em',
  },
};

export const customerName: IT.ITypography = {
  fontFamily: 'Inter',
  fontWeight: 400,
  fontSize: '14px',
  textTransform: 'capitalize',
  lineHeight: 'unset',
  color: ' #2A2A2D',
  display: 'block',
  width: 'fit-content',
  mediaQueryBreakPoints: {
    [size.tabletS]: {
      minWidth: '100px',
    },
  },
};

export const customerPosition: IT.ITypography = {
  fontFamily: 'Inter',
  fontWeight: 400,
  fontSize: '12px',
  textTransform: 'uppercase',
  lineHeight: 'unset',
  color: '#929296',
};

export const testimonialMessage: IT.ITypography = {
  fontFamily: 'Inter',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '24px',
  display: 'block',
  color: '#2A2A2D',
  scrollAnimate: 'fadeIn',
  mediaQueryBreakPoints: {
    [size.tabletS]: {
      maxWidth: '500px',
    },
  },
};

export const wrapperNavigation: IC.IContainer = {
  styles: {
    display: 'flex',
    gap: '2em',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: '1.5em',
    mediaQueryBreakPoints: {
      [size.tabletS]: {
        justifyContent: 'unset',
        gap: '3em',
      },
    },
  },
};

export const fractionTestimonial: IT.ITypography = {
  fontFamily: 'Inter',
  fontSize: '18px',
  fontWeight: 300,
  display: 'block',
  color: '#2A2A2D',
  marginRight: '2em',
  mediaQueryBreakPoints: {
    [size.tabletS]: {
      marginRight: 'unset',
    },
  },
};
