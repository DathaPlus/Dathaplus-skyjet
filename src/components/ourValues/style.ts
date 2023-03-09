import {
  IContainerInterfaces as IC,
  IImageInterfaces as IM,
  ITypogragpyInterfaces as IT,
  size,
} from '@dathaplus/storybook';

export const mainContainer: IC.IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2em',
    justifyContent: 'center',
    alignItems: 'center',
    mediaQueryBreakPoints: {
      [size.tabletL]: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: '2em 0',
      },
    },
  },
};

export const wrapperText: IC.IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2em',
    maxWidth: '540px',
    mediaQueryBreakPoints: {
      [size.tabletL]: {
        gap: '2.5em',
      },
    },
  },
};

export const titleStyles: IT.ITypography = {
  tag: 'p',
  textDecoration: 'underline',
  color: '#A8987E',
  fontWeight: 600,
  fontSize: '18px',
  lineHeight: '22px',
  fontFamily: 'Inter',
  entranceAnimate: 'fadeInUp',
};

export const descriptionStyles: IT.ITypography = {
  tag: 'p',
  color: '#2A2A2D',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '22px',
  fontFamily: 'Inter',
  entranceAnimate: 'fadeIn',
  mediaQueryBreakPoints: {
    [size.tabletL]: {
      lineHeight: '32px',
    },
  },
};

export const imageProps: Omit<IM.IImage, 'src'> = {
  width: '100%',
  height: '100%',
  entranceAnimate: 'fadeInUp',
  styles: {
    display: 'block',
    objectFit: 'fill',
    maxHeight: '340px',
    mediaQueryBreakPoints: {
      [size.mobileL]: {
        maxWidth: '327px',
      },
      [size.tabletL]: {
        maxWidth: '445px',
        maxHeight: '766px',
      },
    },
  },
};
