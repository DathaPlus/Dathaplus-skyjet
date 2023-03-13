import {
  IContainerInterfaces as IC,
  IImageInterfaces as IM,
  ITypogragpyInterfaces as IT,
} from '@dathaplus/storybook';
import { IImage } from '@dathaplus/storybook/dist/interfaces/base/img';
import { IContainer } from '@dathaplus/storybook/dist/interfaces/layout/container';

export const mainContainer: IC.IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '15px 0',
    justifyContent: 'center',
    maxWidth: '920px',
    borderBottom: 'solid #F5F3F1 1px',
    margin: '10px 16px',
    mediaQueryBreakPoints: {
      500: {
        alignItems: 'center',
        margin: 'auto',
        padding: '10px 0',
        borderBottom: 'unset',
      },
      1000: {
        gap: '30px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: 'solid #F5F3F1 1px',
        padding: '30px 0',
      },
    },
  },
};

export const mainContainer2: IC.IContainer = {
  styles: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: '30px',
    mediaQueryBreakPoints: {
      500: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: '80px',
      },
      1000: {
        gap: '30px',
      },
    },
  },
};

export const mainContainer3: IC.IContainer = {
  styles: {
    mediaQueryBreakPoints: {
      500: {
        width: '200px',
      },
      1000: {
        width: 'unset',
      },
    },
  },
};

export const mainContainer4: IC.IContainer = {
  styles: {
    width: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
};

export const imageStyleUno: IImage = {
  styles: {
    maxWidth: '160px',
    height: '155px',
    display: 'block',
    objectFit: 'cover',
  },
};

export const textTitle: IT.ITypography = {
  fontFamily: 'Inter',
  fontWeight: '400px',
  fontSize: '24px',
  color: '#2A2A2D',
  tag: 'p',
  lineHeight: '40px',
  mediaQueryBreakPoints: {
    500: {
      display: 'block',
      width: '200px',
      marginLeft: '-50px',
    },
    1000: {
      marginLeft: 'unset',
    },
  },
};

export const textInfo: IT.ITypography = {
  fontFamily: 'Inter',
  fontWeight: '400px',
  fontSize: '16px',
  lineHeight: '32px',
  color: '#2A2A2D',
  display: 'block',
  maxWidth: '445px',
  mediaQueryBreakPoints: {
    500: {
      padding: '25px',
    },
    1000: {
      padding: '15px',
    },
  },
};

export const containerUno: IContainer = {
  styles: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
};

export const infoText: IT.ITypography = {
  fontFamily: 'Inter',
  fontWeight: '400px',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#2A2A2D',
  display: 'block',
  width: '100%',
  tag: 'p',
  mediaQueryBreakPoints: {
    770: {
      fontSize: '16px',
    },
  },
};

// ----------------------- AIRCRAFT PAGE ------------------------//

export const sectionAircraftTitle: IT.ITypography = {
  fontFamily: 'Inter',
  fontWeight: '300px',
  fontSize: '32px',
  lineHeight: '39px',
  width: '327px',
  color: '#2A2A2D',
  paddingBottom: '20px',
  scrollAnimate: 'fadeInRight',
  mediaQueryBreakPoints: {
    770: {
      fontSize: '48px',
      width: '540px',
      lineHeight: '58px',
    },
  },
};

export const sectionAircraftMainImg: IM.IImage = {
  width: '100%',
  height: '100%',
  scrollAnimate: 'fadeIn',
  styles: {
    width: '375px',
    mediaQueryBreakPoints: {
      770: {
        width: '100%',
      },
    },
  },
};

export const wrapperInfoImage: IC.IContainer = {
  styles: {
    flex: '1',
  },
};

export const mainTitleLeft: IT.ITypography = {
  children:
    'We offer customized Part 135 (Charter) and Part 91 (Private) aircraft management solutions. SkyJet Elite can maintain the safe operation of your aircraft and generate revenue through our air charter programs by chartering your aircraft, which helps defray the cost of ownership and provide ROI.',
  fontFamily: 'Inter',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '30px',
  color: '#2A2A2D',
  tag: 'p',
  entranceAnimate: 'fadeInDown',
  padding: '24px',
  mediaQueryBreakPoints: {
    400: {
      fontSize: '24px',
      lineHeight: '38px',
    },
  },
};

export const mainTitleRight: IT.ITypography = {
  children:
    'SkyJet Elite can handle everything from the initial aircraft acquisition to the management, maintenance, and day-to-day flight operations. If you are interested in offering your aircraft for charter, SkyJet Elite can take care of it all. If you currently own an aircraft or are considering the benefits of aircraft ownership, we are ready to help.\n' +
    'SkyJet Elite offers fully customizable solutions for any ownership program you desire. We strongly believe in transparency, professionalism, and safety: all key factors when managing your aircraft.\n',
  fontFamily: 'Inter',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '30px',
  color: '#2A2A2D',
  tag: 'p',
  entranceAnimate: 'fadeInDown',
  padding: '24px',
  mediaQueryBreakPoints: {
    400: {},
  },
};

export const sectionAircraftDesc: IT.ITypography = {
  fontFamily: 'Inter',
  fontWeight: '400px',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#2A2A2D',
  display: 'block',
  width: '100%',
  tag: 'p',
  mediaQueryBreakPoints: {
    770: {
      fontSize: '16px',
    },
  },
};

export const wrapperInfoImg: IC.IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottom: 'solid #E4DFD7 1px',
    gap: '20px',
    mediaQueryBreakPoints: {
      1250: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '50px',
      },
    },
  },
};
