import React from 'react';
import { ThemeProvider } from '@dathaplus/storybook';
import { theme } from '@utils/theme';

export const MainLayout = ({ children }: any) => {
  return <ThemeProvider customTheme={theme}>{children}</ThemeProvider>;
};
