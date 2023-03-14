import { size } from '@dathaplus/storybook';
import { IImage } from '@dathaplus/storybook/dist/interfaces/base/img';
import { ITypography } from '@dathaplus/storybook/dist/interfaces/base/typograpy';
import { IContainer } from '@dathaplus/storybook/dist/interfaces/layout/container';

export const containerCarousel: IContainer = {
  styles: {
    display: 'flex',

    flexDirection: 'column',
    gap: '2em',
    padding: '1.5em',
    maxWidth: '730px',
    mediaQueryBreakPoints: {
      [size.tabletL]: {
        marginLeft: '35%',
      },
    },
  },
};

export const testimonialContainer: IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2em',
  },
};

export const wrapperButtons: IContainer = {
  styles: {
    width: '40%',
  },
};

export const citeTestimonial: ITypography = {
  fontFamily: 'Inter',
  tag: 'blockquote',
  lineHeight: 'initial',
  scrollAnimate: 'fadeIn',
  textTransform: 'initial',
  fontSize: '18px',
};

export const wrapperCustomerInfo: IContainer = {
  styles: {
    display: 'flex',
    gap: '1.2em',
    alignItems: 'flex-end',
    mediaQueryBreakPoints: {
      [size.tabletM]: {
        minWidth: '140px',
      },
    },
  },
};

export const customerName: ITypography = {
  fontFamily: 'Inter',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
};

export const customerJob: ITypography = {
  fontFamily: 'Inter',
  fontWeight: 400,
  fontSize: '12px',
  color: '#929296',
  textTransform: 'uppercase',
  lineHeight: 'initial',
};

export const imgCustomer: IImage = {
  src: './img/asset1.webp',
  alt: 'asset1',
  width: '50%',
  scrollAnimate: 'fadeIn',
  styles: {
    maxWidth: '200px',
  },
};
