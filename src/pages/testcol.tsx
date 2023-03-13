import React from 'react';
import SectionAircraftManagement from '@components/sectionaircraftmanagement/main';

const TestColum = () => {
  return (
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
  );
};

export default TestColum;
