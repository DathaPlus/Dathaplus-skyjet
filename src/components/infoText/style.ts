import { IContainerInterfaces as IC, size } from '@dathaplus/storybook';

export const mainContainer = (direction: any): IC.IContainer => ({
  styles: {
    display: 'flex',
    gap: '1.5em',
    flexDirection: direction === 'revert' ? 'column-reverse' : 'column',
    mediaQueryBreakPoints: {
      [size.tabletM]: {
        gap: '3em',
        flexDirection: direction === 'revert' ? 'row-reverse' : 'row',
      },
    },
  },
});
