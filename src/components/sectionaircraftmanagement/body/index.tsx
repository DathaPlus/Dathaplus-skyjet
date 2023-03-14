import { Container, ContainerWrapper, Text } from '@dathaplus/storybook';
import { TSectionAircraftManagementBody } from '@interfaces/sectionaircraftmanagement';
import React, { FC } from 'react';

import { infoStyles, mainContainer, titleStyles } from './style';

export const BodyAircraftManagement: FC<TSectionAircraftManagementBody> = ({ title, info }) => {
  return (
    <>
      <ContainerWrapper>
        <Container {...mainContainer}>
          <div>
            <Text {...titleStyles}>{title}</Text>
          </div>

          <div
            style={{
              maxWidth: '635px',
            }}
          >
            <>
              <Text {...infoStyles}>{info}</Text>
            </>
          </div>
        </Container>
      </ContainerWrapper>
    </>
  );
};
