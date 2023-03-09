import {
  IButtonInterfaces as IB,
  IContainerInterfaces as IC,
  IImageInterfaces as IIM,
  ITypogragpyInterfaces as IT,
  size,
} from '@dathaplus/storybook';

export const imageStyles: Omit<IIM.IImage, 'src'> = {
  alt: 'business',
  scrollAnimate: 'fadeIn',
  width: '100%',
  height: '100%',
  loading: 'lazy',
  styles: {
    width: '100%',
    maxHeight: '310px',
    mediaQueryBreakPoints: {
      [size.tabletS]: {
        width: 'fit-content',
      },
    },
  },
};

export const mainContainerCard: IC.IContainer = {
  styles: {
    display: 'flex',
    gap: '1em',
    flexDirection: 'column',
    justifyContent: 'center',
    mediaQueryBreakPoints: {
      [size.tabletS]: {
        flexDirection: 'row',
        gap: 0,
      },
    },
  },
};

export const wrapperContent: IC.IContainer = {
  styles: {
    padding: '0 1em',
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    mediaQueryBreakPoints: {
      [size.tabletS]: {
        padding: '1em 1em 1em 2em',
        justifyContent: 'center',
        border: 'solid #E4DFD7 1px',
        borderLeft: 'unset',
      },
    },
  },
};

export const titleStyles: IT.ITypography = {
  fontFamily: 'Inter',
  fontSize: '28px',
  color: '#2A2A2D',
  fontWeight: 500,
  padding: '.5em 0',
};

export const wrapperDescription: IC.IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    mediaQueryBreakPoints: {
      [size.laptopS]: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
  },
};

export const descriptionStyles: IT.ITypography = {
  fontFamily: 'Inter',
  fontSize: '14px',
  color: '#2A2A2D',
  fontWeight: 500,
  lineHeight: '32px',
  padding: '.5em 0',
  display: 'block',
  mediaQueryBreakPoints: {
    [size.tabletS]: {
      maxWidth: '350px',
    },
  },
};

export const buttonStyles: IB.IButton['styles'] = {
  borderRadius: '0',
  width: '100%',
  mediaQueryBreakPoints: {
    [size.tabletS]: {
      width: 'fit-content',
    },
  },
};

export const buttonTextStyles: IT.ITypography = {
  fontFamily: 'Inter',
  fontSize: '14px',
  color: '#0D0D0E',
  fontWeight: 600,
};
