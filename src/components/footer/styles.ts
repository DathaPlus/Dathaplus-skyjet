import { IContainerInterfaces, ITypogragpyInterfaces, size } from '@dathaplus/storybook';

export const ContainerFooter: IContainerInterfaces.IContainer = {
  tag: 'footer',
  styles: {
    padding: '1.5em',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.7em',
    paddingTop: '3em',
  },
};

export const WrapperFoot: IContainerInterfaces.IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5em',
    mediaQueryBreakPoints: {
      [size.tabletM]: {
        flexDirection: 'row',
        gap: '12em',
      },
    },
  },
};

export const TextBase: ITypogragpyInterfaces.ITypography = {
  fontFamily: 'Inter',
  fontWeight: 300,
};

export const headerText: ITypogragpyInterfaces.ITypography = {
  ...TextBase,
  styleTheme: 'gray.gray0',
  fontSize: '24px',
  lineHeight: '36px',
};

export const descriptionText: ITypogragpyInterfaces.ITypography = {
  ...TextBase,
  fontSize: '16px',
  lineHeight: '24px',
  styleTheme: 'primary.light',
  textDecoration: 'underline',
};
