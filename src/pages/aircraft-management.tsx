import React from 'react';
import { Container, ContainerWrapper } from '@dathaplus/storybook';
import { InfoText } from '@components/infoText';
import { containerUno } from '@components/sectionaircraftmanagement/style';
import SectionAircraftManagement from '@components/sectionaircraftmanagement';

const AircraftManagement = () => {
  return (
    <>
      <main>
        <ContainerWrapper>
          <Container {...containerUno}>
            <InfoText
              textLeft={{
                children:
                  'We offer customized Part 135 (Charter) and Part 91 (Private) aircraft management solutions. SkyJet Elite can maintain the safe operation of your aircraft and generate revenue through our air charter programs by chartering your aircraft, which helps defray the cost of ownership and provide ROI.',
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '30px',
                color: '#2A2A2D',
                tag: 'p',
                scrollAnimate: 'fadeInDown',
                padding: '24px',
                mediaQueryBreakPoints: {
                  400: {
                    fontSize: '28px',
                    lineHeight: '38px',
                  },
                },
              }}
              textRight={{
                children:
                  'SkyJet Elite can handle everything from the initial aircraft acquisition to the management, maintenance, and day-to-day flight operations. If you are interested in offering your aircraft for charter, SkyJet Elite can take care of it all. If you currently own an aircraft or are considering the benefits of aircraft ownership, we are ready to help.\n' +
                  'SkyJet Elite offers fully customizable solutions for any ownership program you desire. We strongly believe in transparency, professionalism, and safety: all key factors when managing your aircraft.\n',
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '30px',
                color: '#2A2A2D',
                tag: 'p',
                scrollAnimate: 'fadeInDown',
                padding: '24px',
                mediaQueryBreakPoints: {
                  400: {},
                },
              }}
            />
          </Container>
        </ContainerWrapper>
      </main>
      <div>
        <SectionAircraftManagement
          image="/img/Rectangle4.png"
          title={'Fiscal Management'}
          info={
            'Each aircraft is treated as its business unit with detailed and transparent accounting.'
          }
        />

        <SectionAircraftManagement
          image="/img/Rectangle4.png"
          title={'Maintenance'}
          info={
            'Fully dedicated maintenance group keeps your asset operating efficiently and safely.'
          }
        />

        <SectionAircraftManagement
          image="/img/Rectangle4.png"
          title={'Full Owner Services Team'}
          info={'Providing ‘Single-Point-Contact’ for support and services to our owners.'}
        />

        <SectionAircraftManagement
          image="/img/Rectangle4.png"
          title={'Flight Coordination'}
          info={
            'The Dispatch and Flight Coordination team supports and tracks every flight. Everywhere. Every time.'
          }
        />

        <SectionAircraftManagement
          image="/img/Rectangle4.png"
          title={'High-End Charter Marketing'}
          info={
            'Should you choose to have your aircraft conduct charter operations, our sales team is highly experienced and will ensure that each aircraft movement optimizes revenue generation.'
          }
        />
      </div>
    </>
  );
};

export default AircraftManagement;
