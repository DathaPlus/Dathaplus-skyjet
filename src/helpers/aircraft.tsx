import { LinkComponent } from '@components/link';
import { infoText, sectionAircraftDesc } from '@components/sectionaircraftmanagement/style';
import { Text } from '@dathaplus/storybook';
import React from 'react';

export const aircraftSectionImg = [
  {
    title: 'Fiscal Management',
    img: '/img/rectangle1.webp',
    info: 'Each aircraft is treated as its business unit with detailed and transparent accounting.',
  },
  {
    title: 'Maintenance',
    img: '/img/rectangle1.webp',
    info: 'Fully dedicated maintenance group keeps your asset operating efficiently and safely.',
  },
  {
    title: 'Full Owner Services Team',
    img: '/img/rectangle1.webp',
    info: 'Providing ‘Single-Point-Contact’ for support and services to our owners.',
  },
  {
    title: 'Flight Coordination',
    img: '/img/rectangle1.webp',
    info: 'The Dispatch and Flight Coordination team supports and tracks every flight. Everywhere. Every time.',
  },
  {
    title: 'High-End Charter Marketing',
    img: '/img/rectangle1.webp',
    info: 'Should you choose to have your aircraft conduct charter operations, our sales team is highly experienced and will ensure that each aircraft movement optimizes revenue generation.',
  },
];

export const aircraftSectionsBodyManagement = [
  {
    title: 'Concierge',
    content: (
      <Text {...infoText}>
        No matter if you{"'"}re traveling for business or pleasure, SkyJet Elite can handle every
        aspect of your trip. Car service, dinner, hotels, you name it, all can be handled by SkyJet
        Elite{"'"}s Private Travel Concierge. Our travel professionals are experienced and will
        ensure that you receive only the best service every time. To put a travel concierge to work
        for you, call XXX-XXX-XXX or email{' '}
        <LinkComponent
          text={{
            children: 'reservations@skyjetselite.com',
            color: '#2F7ABF',
            fontFamily: 'Inter',
            fontWeight: '400px',
            fontSize: '16px',
            lineHeight: '24px',
            display: 'inline',
          }}
          href="https://www.google.com"
        />
      </Text>
    ),
  },
  {
    title: 'Elite Travel Experience',
    content: (
      <>
        <Text {...infoText}>
          Experience unrivaled service and exceptional value with SkyJet Elite’s world-class Private
          Air Charter flights. Forget the headaches of commercial air travel—let SkyJet Elite create
          a customized aircraft charter solution just for you. Travel in safety and luxury anywhere
          on your schedule, and trust SkyJet Elite to take care of every detail.
        </Text>
        <br />
        <Text {...sectionAircraftDesc}>
          Whether you have meetings in three cities on the same day, or you want to surprise your
          family with a last-minute vacation, SkyJet Elite will deliver you an unmatched charter
          experience. In as little as 3 hours’ notice, SkyJet Elite will have your ideal aircraft
          staffed and ready to fly. We anticipate your needs and pay careful attention to every
          detail of your flight. Our mission is to provide you with the safest, most thoughtful and
          professional service in private travel.
        </Text>
      </>
    ),
  },
  {
    title: 'Safety',
    content: (
      <>
        <Text {...sectionAircraftDesc}>
          SkyJet Elite is committed to providing the highest level of safety and security for our
          clients. Making sure every individual flight is managed under the highest safety standards
          requires a proactive, company-wide approach. We are proud to meet and exceed the standards
          set forth by the FAA and the Department of Transportation; as well as our independent
          third-party safety auditors ARGUS and Wyvern.
        </Text>
        <br />
        <Text {...sectionAircraftDesc}>
          There is no higher priority to SkyJet Elite than the safety and security of our clients
          and employees. To aid in the prevention of exposure to COVID-19, SkyJet Elite has
          implemented a comprehensive safety protocol and enhanced our already stringent aircraft
          cleaning standards based on recommendations from the Centers for Disease Control and
          Prevention (CDC), World Health Organization (WHO), the Occupational Health and Safety
          Administration (OSHA), and the Federal Aviation Administration (FAA). Every aircraft is
          treated with MicroShield 360, an antimicrobial biostatic finish which prevents pathogens
          from living on any treated surface. It is effective on MRSA, E. Coli, H1N1 Influenza,
          Common Cold, Strep, COVID-19, and 90+ additional pathogens. (INLUDE SINGLE PAGE BROCHURE
          FOR MICROSHIELD 360).
        </Text>
        <br />
        <Text {...sectionAircraftDesc}>
          Our crews and staff adhere to the standards and measures set forth by the CDC, FAA, and
          OSHA for individual health and public safety.
        </Text>
      </>
    ),
  },
];
