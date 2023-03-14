import {
  IContainerInterfaces,
  IImageInterfaces,
  ITypogragpyInterfaces,
  size,
} from '@dathaplus/storybook';

export const mainContainer: IContainerInterfaces.IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '2em',
    margin: '2em 0',
    mediaQueryBreakPoints: {
      [size.tabletM]: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
  },
};

export const wrapperTitle: IContainerInterfaces.IContainer = {
  styles: {
    mediaQueryBreakPoints: {
      [size.tabletM]: {
        width: '40%',
      },
    },
  },
};

export const titleStyles: ITypogragpyInterfaces.ITypography = {
  fontFamily: 'Inter',
  fontWeight: 300,
  fontSize: '32px',
  lineHeight: '39px',
  display: 'block',
  scrollAnimate: 'fadeIn',
  mediaQueryBreakPoints: {
    [size.tabletM]: {
      width: '280px',
      fontSize: '38px',
      lineHeight: '58px',
      marginLeft: '1.5em',
    },
  },
};

export const wrapperCarousel: IContainerInterfaces.IContainer = {
  styles: {
    width: '100%',
    mediaQueryBreakPoints: {
      [size.tabletM]: {
        width: '60%',
      },
    },
  },
};

export const imgStyles: IImageInterfaces.IImage = {
  styles: {
    objectFit: 'cover',
    width: '100%',
    display: 'block',
    height: '294px',
    mediaQueryBreakPoints: {
      [size.tabletM]: {
        height: '368px',
      },
    },
  },
};

export const containerSectionButtons: IContainerInterfaces.IContainer = {
  styles: {
    display: 'flex',
    marginTop: '1em',
    gap: '1em',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    mediaQueryBreakPoints: {
      [size.tabletM]: {
        gap: '4em',
        justifyContent: 'flex-start',
      },
    },
  },
};

export const wrapperButtons: IContainerInterfaces.IContainer = {
  styles: {
    display: 'flex',
    gap: '.5em',
  },
};

export const wrapperFractionCarousel: IContainerInterfaces.IContainer = {
  styles: {
    width: 'fit-content',
    display: 'flex',
    gap: '1em',
    alignItems: 'center',
  },
};

export const fractionCarousel = (id?: string): ITypogragpyInterfaces.ITypography => ({
  fontFamily: 'Inter',
  fontSize: '18px',
  marginRight: '2em',
  id: `fraction_${id}`,
  display: 'block',
  width: 'fit-content',
  children: '1/6',
  whiteSpace: 'nowrap',
});

export const linkAllPhotosStyles: ITypogragpyInterfaces.ITypography = {
  children: 'view all photos',
  textTransform: 'uppercase',
  textDecoration: 'underline',
  display: 'block',
  fontFamily: 'Inter',
  color: '#5995cc',
  cursor: 'pointer',
  fontSize: '14px',
};
