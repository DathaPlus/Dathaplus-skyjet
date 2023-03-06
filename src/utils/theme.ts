import { ITheme } from '@dathaplus/storybook';

export const gray: ITheme['gray'] = {
  gray0: '#ffffff',
  gray100: '#f5f5f5',
  gray200: '#d3d4d3',
  gray300: '#b6b7b7',
  gray400: '#86888c',
  gray500: '#50535a',
  gray600: '#2a2a2d',
};

export const theme: ITheme = {
  primary: {
    main: '#a8987e',
    inactive: '#a1987e',
    focus: '#a8987f',
    hover: '#a7987e',
    selected: '#a7987e',
    light: '#a6987e',
  },
  secondary: {
    main: '#0b2739',
    hover: '#a3adb4',
    inactive: '#2e5166',
    focus: '#062e48',
  },
  tertiary: {
    main: '#5cb615',
    hover: '#adda8a',
    inactive: '#adda8a',
    focus: '#499110',
  },
  buttonColor: {
    primary: {
      background: {
        main: '#a8987e',
      },
      text: {
        main: '#0d0d0e',
      },
    },
    secondary: {
      background: {
        main: '#fff',
      },
      text: {
        main: '#a8987e',
      },
    },
  },
  textColor: {
    primary: {
      main: '#a8987e',
      hover: '#a8987e',
    },
    secondary: { main: '#0b2739', hover: '#a3adb4' },
    tertiary: {
      main: '#5cb615',
      hover: '#adda8a',
    },
    gray: {
      ...gray,
      main: '#86888c',
      inactive: '#b6b7b7',
      dark: '#313235',
      focus: '#50535a',
      hover: '#b6b7b7',
      light: '#d3d4d3',
    },
    error: {
      main: '#f44336',
    },
  },
  hightLight: {
    green: {
      main: '#5cb615',
      light: '#bde4a4',
      dark: '#3c7521',
    },
    purpure: {
      main: '#a13ea1',
      light: '#debce4',
      dark: '#642a72',
    },
    magenta: {
      main: '#e63780',
      light: '#fbc7de',
      dark: '#922859',
    },
    orange: {
      main: '#ec624b',
      light: '#f8cccc',
      dark: '#983230',
    },
    yellow: {
      main: '#f28d15',
      light: '#f8d2b3',
      dark: '#9f591f',
    },
  },
  gray,
};
