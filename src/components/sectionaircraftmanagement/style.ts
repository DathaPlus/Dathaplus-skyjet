import { IContainerInterfaces as IC } from '@dathaplus/storybook';

export const mainContainer: IC.IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '1.5em',
    justifyContent: 'center',
    mediaQueryBreakPoints: {
      1000: {
        gap: '30px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.5em 150px',
      },
    },
  },
};
