import { Header } from '@components/header';
import { InfoText } from '@components/infoText';
import {SectionAircraftManagement, BodyAircraftManagement} from '@components/sectionaircraftmanagement';
import {containerUno, infoText} from '@components/sectionaircraftmanagement/style';
import {Container, ContainerWrapper, Image, InfoImage, Section, Text} from '@dathaplus/storybook';
import { LinkComponent } from '@components/link';
import React from 'react';

const AircraftManagement = () => {
  return (
    <>
      <main>

        <Header title="about us" subtitle="Aircraft Management" />

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
          image="/img/rectangle1.webp"
          title={'Fiscal Management'}
          info={
            'Each aircraft is treated as its business unit with detailed and transparent accounting.'
          }
        />

        <SectionAircraftManagement
          image="/img/rectangle1.webp"
          title={'Maintenance'}
          info={
            'Fully dedicated maintenance group keeps your asset operating efficiently and safely.'
          }
        />

        <SectionAircraftManagement
          image="/img/Rectangle1.webp"
          title={'Full Owner Services Team'}
          info={'Providing ‘Single-Point-Contact’ for support and services to our owners.'}
        />

        <SectionAircraftManagement
          image="/img/Rectangle1.webp"
          title={'Flight Coordination'}
          info={
            'The Dispatch and Flight Coordination team supports and tracks every flight. Everywhere. Every time.'
          }
        />

        <SectionAircraftManagement
          image="/img/Rectangle1.webp"
          title={'High-End Charter Marketing'}
          info={
            'Should you choose to have your aircraft conduct charter operations, our sales team is highly experienced and will ensure that each aircraft movement optimizes revenue generation.'
          }
        />

        <SectionAircraftManagement
          image="/img/Rectangle1.webp"
          title={'High-End Charter Marketing'}
          info={
            <>
              <Text
                fontFamily= 'Inter'
                fontWeight= '400px'
                fontSize= '16px'
                lineHeight= '24px'
                color={'#2A2A2D'}
                display= 'block'
                width= '100%'
                tag= 'p'
                mediaQueryBreakPoints={{
                  770 : {
                    fontSize: '16px',

                  }
                }}
              >No matter if you're traveling for business or pleasure, SkyJet Elite can handle every aspect of your trip. Car service, dinner, hotels, you name it, all can be handled by SkyJet Elite's Private Travel Concierge. Our travel professionals are experienced and will ensure that you receive only the best service every time. To put a travel concierge to work for you, call XXX-XXX-XXX or email <a href='' >reservations@skyjetselite.com</a>
                Experience unrivaled service and exceptional value with SkyJet Elite’s world-class Private Air Charter flights. Forget the headaches of commercial air travel—let SkyJet Elite create a customized aircraft charter solution just for you. Travel in safety and luxury anywhere on your schedule, and trust SkyJet Elite to take care of every detail.
              </Text>
              <br/>
              <Text
                fontFamily= 'Inter'
                fontWeight= '400px'
                fontSize= '16px'
                lineHeight= '24px'
                color={'#2A2A2D'}
                display= 'block'
                width= '100%'
                tag= 'p'
                mediaQueryBreakPoints={{
                  770 : {
                    fontSize: '16px',

                  }
                }}
              >Whether you have meetings in three cities on the same day, or you want to surprise your family with a last-minute vacation, SkyJet Elite will deliver you an unmatched charter experience. In as little as 3 hours’ notice, SkyJet Elite will have your ideal aircraft staffed and ready to fly. We anticipate your needs and pay careful attention to every detail of your flight. Our mission is to provide you with the safest, most thoughtful and professional service in private travel.
              </Text>
            </>

          }
        />


      </div>

      <Section padding= '0'
      alignItems= 'center'
      backgroundColor={'#F5F3F1'}>
        <Container styles={{
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
            }
          }
        }}>
          <div style={{
            flex: 1,
          }}>
          <Image styles = {{
            width: '375px',
            mediaQueryBreakPoints: {
              770: {
                width: '100%'
              }
            }
          }} src= { "/img/Rectangle22.png" }
          />
            </div>
          <div style={{
            flex: 1,
          }}>
            <Text
              fontFamily= 'Inter'
              fontWeight= '300px'
              fontSize= '32px'
              lineHeight= '39px'
              width= '327px'
              color= {'#2A2A2D'}
              paddingBottom= '20px'
              mediaQueryBreakPoints={{
                770 : {
                  fontSize: '48px',
                  width: '540px',
                  lineHeight: '58px',
                }
              }}
            >Our Private Air Charter Services offers</Text>
          </div>


        </Container>

        <BodyAircraftManagement title={'Concierge'} info={
        <Text {...infoText} >Experience unrivaled service and exceptional value with SkyJet Elite’s world-class Private Air Charter flights. Forget the headaches of commercial air travel—let SkyJet Elite create a customized aircraft charter solution just for you. Travel in safety and luxury anywhere on your schedule, and trust SkyJet Elite to take care of every detail.
        </Text>}></BodyAircraftManagement>




        <BodyAircraftManagement title={'Elite Travel Experience'} info={
          <>
          <Text {...infoText} >No matter if you're traveling for business or pleasure, SkyJet Elite can handle every aspect of your trip. Car service, dinner, hotels, you name it, all can be handled by SkyJet Elite's Private Travel Concierge. Our travel professionals are experienced and will ensure that you receive only the best service every time. To put a travel concierge to work for you, call XXX-XXX-XXX or email <LinkComponent text={{children: 'reservations@skyjetselite.com',
          color: '#2F7ABF',
            fontFamily: 'Inter',
            fontWeight: '400px',
            fontSize: '16px',
            lineHeight: '24px'}} href='https://www.google.com' />
          </Text>
          <br/>
          <Text
              fontFamily= 'Inter'
              fontWeight= '400px'
              fontSize= '16px'
              lineHeight= '24px'
              color={'#2A2A2D'}
              display= 'block'
              width= '100%'
              tag= 'p'
              mediaQueryBreakPoints={{
                770 : {
                  fontSize: '16px',

                }
              }}
            >Whether you have meetings in three cities on the same day, or you want to surprise your family with a last-minute vacation, SkyJet Elite will deliver you an unmatched charter experience. In as little as 3 hours’ notice, SkyJet Elite will have your ideal aircraft staffed and ready to fly. We anticipate your needs and pay careful attention to every detail of your flight. Our mission is to provide you with the safest, most thoughtful and professional service in private travel.
            </Text>
        </>
        }></BodyAircraftManagement>
        <BodyAircraftManagement title={'Safety'} info={
          <>
            <Text
              fontFamily= 'Inter'
              fontWeight= '400px'
              fontSize= '16px'
              lineHeight= '24px'
              color={'#2A2A2D'}
              display= 'block'
              width= '100%'
              tag= 'p'
            >SkyJet Elite is committed to providing the highest level of safety and security for our clients. Making sure every individual flight is managed under the highest safety standards requires a proactive, company-wide approach. We are proud to meet and exceed the standards set forth by the FAA and the Department of Transportation; as well as our independent third-party safety auditors ARGUS and Wyvern.
            </Text>
            <br/>
            <Text
              fontFamily= 'Inter'
              fontWeight= '400px'
              fontSize= '16px'
              lineHeight= '24px'
              color={'#2A2A2D'}
              display= 'block'
              width= '100%'
              tag= 'p'
              mediaQueryBreakPoints={{
                770 : {
                  fontSize: '16px',

                }
              }}
            >There is no higher priority to SkyJet Elite than the safety and security of our clients and employees. To aid in the prevention of exposure to COVID-19, SkyJet Elite has implemented a comprehensive safety protocol and enhanced our already stringent aircraft cleaning standards based on recommendations from the Centers for Disease Control and Prevention (CDC), World Health Organization (WHO), the Occupational Health and Safety Administration (OSHA), and the Federal Aviation Administration (FAA). Every aircraft is treated with MicroShield 360, an antimicrobial biostatic finish which prevents pathogens from living on any treated surface. It is effective on MRSA, E. Coli, H1N1 Influenza, Common Cold, Strep, COVID-19, and 90+ additional pathogens. (INLUDE SINGLE PAGE BROCHURE FOR MICROSHIELD 360).
            </Text>
            <br/>
            <Text
              fontFamily= 'Inter'
              fontWeight= '400px'
              fontSize= '16px'
              lineHeight= '24px'
              color={'#2A2A2D'}
              display= 'block'
              width= '100%'
              tag= 'p'
              mediaQueryBreakPoints={{
                770 : {
                  fontSize: '16px',
                }
              }}
            >Our crews and staff adhere to the standards and measures set forth by the CDC, FAA, and OSHA for individual health and public safety.
            </Text>
          </>
        }></BodyAircraftManagement>

      </Section>
    </>
  );
};

export default AircraftManagement;
