import React from 'react';
import { Container, ContainerWrapper, InfoImage, Section } from '@dathaplus/storybook';
import { InfoText } from '@components/infoText';
import { containerUno } from '@components/infoText/style';

const AircraftMangement = () => {
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
                fontSize: '28px',
                lineHeight: '42px',
                color: '#2A2A2D',
                tag: 'p',
                scrollAnimate: 'fadeInDown',
              }}
              textRight={{
                children:
                  'SkyJet Elite can handle everything from the initial aircraft acquisition to the management, maintenance, and day-to-day flight operations. If you are interested in offering your aircraft for charter, SkyJet Elite can take care of it all. If you currently own an aircraft or are considering the benefits of aircraft ownership, we are ready to help.\n' +
                  'SkyJet Elite offers fully customizable solutions for any ownership program you desire. We strongly believe in transparency, professionalism, and safety: all key factors when managing your aircraft.\n',
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '32px',
                color: '#2A2A2D',
                tag: 'p',
                scrollAnimate: 'fadeInDown',
              }}
            />
          </Container>
        </ContainerWrapper>
      </main>
    </>
  );
};

export default AircraftManagement;
