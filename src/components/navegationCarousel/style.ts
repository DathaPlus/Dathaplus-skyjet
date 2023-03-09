import { size } from '@dathaplus/storybook';
import { ITypography } from '@dathaplus/storybook/dist/interfaces/base/typograpy';
import { IContainer } from '@dathaplus/storybook/dist/interfaces/layout/container';

export const containerCarouselInfo = ({ variant }: any): IContainer => ({
  styles: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1em',
    padding: variant === 'one' ? '1.5em' : undefined,
    position: 'relative',
    mediaQueryBreakPoints: {
      [size.tabletL]: {
        marginLeft: variant === 'one' ? '20%' : undefined,
      },
    },
  },
});

export const containerButtons: IContainer = {
  styles: {
    display: 'flex',
    gap: '1em',
  },
};

export const wapperInfoStepper: IContainer = {
  styles: {
    mediaQueryBreakPoints: {
      [size.tabletL]: {
        position: 'absolute',
        left: '20%',
        paddingLeft: '.5em',
      },
    },
  },
};

export const infoStepperCarousel: ITypography = {
  fontFamily: 'Inter',
  fontSize: '18px',
  marginRight: '2em',
  display: 'block',
};
