import {
  ISectionInterfaces as IS,
  IContainerInterfaces as IC,
  IImageInterfaces as IM,
} from '@dathaplus/storybook';
import { ILink } from 'interfaces/link';

export const sectionStyles: IS.ISection = {
  backgroundColor: '#E4DFD7',

  title: {
    children: 'CERTIFICATES',
    color: '#A8987E',
    fontWeight: 600,
    fontFamily: 'Inter',
    textDecoration: 'underline',
    lineHeight: '22px',
    fontSize: '18px',
    textAlign: 'center',
    marginTop: '1em',
    marginBottom: '1em',
  },
};

export const containerChildren: IC.IContainer = {
  styles: {
    display: 'flex',
    gap: '1em',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

//------------------CERTIFICATE COMPONENT ----------------

export const containerCertificate: IC.IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    alignItems: 'center',
    padding: '1em',
  },
};

export const imageContainer: IM.IImage = {
  height: '220px',
  scrollAnimate: 'fadeInUp',
  styles: {
    height: '220px',
    maxWidth: '327px',
    display: 'block',
  },
};

export const linkProps: ILink = {
  target: '_black',
  text: {
    children: 'learn more',
    textTransform: 'uppercase',
    color: '#5995CC',
    textDecoration: 'underline',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '27px',
    cursor: 'pointer',
  },
};
