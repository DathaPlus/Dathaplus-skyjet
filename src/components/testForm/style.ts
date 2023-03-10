import { size } from '@dathaplus/storybook';
import { IContainer } from '@dathaplus/storybook/dist/interfaces/layout/container';

export const rightContainerStyle: IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2em',
    mediaQueryBreakPoints: {
      [size.tabletL]: {
        gap: 'unset',
        flexDirection: 'row',
      },
    },
  },
};
