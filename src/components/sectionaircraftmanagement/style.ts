import { IContainerInterfaces as IC, ITypogragpyInterfaces } from '@dathaplus/storybook';
import { IImage } from '@dathaplus/storybook/dist/interfaces/base/img';
import { IContainer } from '@dathaplus/storybook/dist/interfaces/layout/container';

export const mainContainer: IC.IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '1.5em',
    justifyContent: 'center',
    mediaQueryBreakPoints: {
      500: {
        alignItems: 'center',
      },
      1000: {
        gap: '30px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '1.5em 150px',
      },
    },
  },
};

export const mainContainer2: IC.IContainer = {
  styles: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: '30px',
    mediaQueryBreakPoints: {
      500: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: '80px',
      },
      1000: {
        gap: '30px',
      },
    },
  },
};

export const mainContainer3: IC.IContainer = {
  styles: {
    mediaQueryBreakPoints: {
      500: {
        width: '200px',
      },
      1000: {
        width: 'unset',
      },
    },
  },
};

export const mainContainer4: IC.IContainer = {
  styles: {
    width: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
};

export const imageStyleUno: IImage = {
  styles: {
    maxWidth: '160px',
    height: '155px',
    display: 'block',
    objectFit: 'cover',
  },
};

export const textTitle: ITypogragpyInterfaces.ITypography = {
  fontFamily: 'Inter',
  fontWeight: '400px',
  fontSize: '24px',
  color: '#2A2A2D',
  tag: 'p',
  lineHeight: '40px',
  mediaQueryBreakPoints: {
    500: {
      display: 'block',
      width: '200px',
      marginLeft: '-50px',
    },
    1000: {
      marginLeft: 'unset',
    },
  },
};

export const textInfo: ITypogragpyInterfaces.ITypography = {
  fontFamily: 'Inter',
  fontWeight: '400px',
  fontSize: '16px',
  lineHeight: '32px',
  color: '#2A2A2D',
  display: 'block',
  maxWidth: '445px',
};

export const containerUno: IContainer = {
  styles: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
};
