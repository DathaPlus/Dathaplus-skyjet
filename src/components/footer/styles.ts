import { IContainerInterfaces, ITypogragpyInterfaces, size } from '@dathaplus/storybook';

export const ContainerFooter: IContainerInterfaces.IContainer = {
  tag: 'footer',
  styles: {
    padding: '3em 1.5em',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.7em',
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
  mediaQueryBreakPoints: {
    [size.tabletM]: {
      fontSize: '32px',
      lineHeight: '48px',
      marginBottom: '1em',
    },
  },
};

export const descriptionText: ITypogragpyInterfaces.ITypography = {
  ...TextBase,
  fontSize: '16px',
  lineHeight: '24px',
  styleTheme: 'primary.light',
  textDecoration: 'underline',
  width: 'fit-content',
  mediaQueryBreakPoints: {
    [size.tabletM]: {
      fontSize: '20px',
      lineHeight: '30px',
    },
  },
};

export const copyRight: ITypogragpyInterfaces.ITypography = {
  fontSize: '12px',
  lineHeight: '30px',
  styleTheme: 'primary.light',
  marginTop: '1em',
  color: '#d0c4af',
};
