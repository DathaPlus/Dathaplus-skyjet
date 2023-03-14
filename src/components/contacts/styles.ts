import { size } from '@dathaplus/storybook';
import { IButton } from '@dathaplus/storybook/dist/interfaces/base/button';
import { ITypography } from '@dathaplus/storybook/dist/interfaces/base/typograpy';
import { IContainer } from '@dathaplus/storybook/dist/interfaces/layout/container';

export const mainContainerStyles: IContainer = {
  styles: {
    padding: '1.5em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '2em',
    margin: '0.5em 0',
    mediaQueryBreakPoints: {
      [size.tabletL]: {
        flexDirection: 'row',
      },
    },
  },
};
export const titleStyles: ITypography = {
  width: '100%',
  variant: 'h2',
  fontSize: '23px',
  entranceAnimate: 'fadeInUp',
  mediaQueryBreakPoints: {
    [size.tabletL]: {
      width: '35%',
      maxWidth: '300px',
      fontSize: '28px',
    },
  },
};
export const descriptionStyles: ITypography = {
  width: '100%',
  variant: 'body2',
  fontWeight: 400,
  mediaQueryBreakPoints: {
    [size.tabletL]: {
      width: '50%',
      maxWidth: '600px',
    },
  },
};
export const containerButtonStyles: IContainer = {
  styles: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    mediaQueryBreakPoints: {
      [size.tabletL]: {
        width: '15%',
        maxWidth: '200px',
      },
    },
  },
};
export const buttonStyles: IButton = {
  styles: {
    width: '100%',
    borderRadius: 0,
    styleTheme: 'secondary',
    backgroundColor: 'transparent',
  },
};
