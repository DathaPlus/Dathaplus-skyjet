import React from 'react';
import SectionAircraftManagement from '@components/sectionaircraftmanagement';

const TestColum = () => {
  return (
    <>
      <SectionAircraftManagement
        image="/img/Rectangle4.png"
        title={'Fiscal Management'}
        info={
          'Each aircraft is treated as its business unit with detailed and transparent accounting.'
        }
      />
    </>
  );
};

export default TestColum;
