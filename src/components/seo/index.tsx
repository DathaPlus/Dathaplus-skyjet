import { ISeo } from '@interfaces/seo';
import React from 'react';

export const SEO = ({ children, lang = 'en', title }: ISeo) => (
  <>
    <html lang={lang} />
    <title>{title}</title>
    <link id="icon" rel="icon" href="global-icon" />
    {children}
  </>
);
