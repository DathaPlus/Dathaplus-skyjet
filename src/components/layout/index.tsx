import { Footer } from '@components/footer';
import { ThemeProvider } from '@dathaplus/storybook';
import { theme } from '@utils/theme';
import React from 'react';

export const MainLayout = ({ children }: any) => {
  return (
    <ThemeProvider customTheme={theme}>
      {children}
      <Footer />
    </ThemeProvider>
  );
};
