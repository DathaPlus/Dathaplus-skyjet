import { IButtonCarousel } from 'interfaces/buttonCarousel';
import React, { FC } from 'react';
import { Container, Icon } from '@dathaplus/storybook';

export const ButtonCarousel: FC<IButtonCarousel> = ({ direction = 'left', disabled }) => {
  return (
    <div id={`${direction === 'left' ? 'prev12' : 'next12'}`}>
      <Container
        styles={{
          padding: '12px',
          backgroundColor: disabled ? '#f6f6f6' : '#ececed',
          width: '48px',
          height: '48px',
          display: 'grid',
          placeContent: 'center',
          cursor: 'pointer',
        }}
      >
        <Icon name={`caret-${direction}`} />
      </Container>
    </div>
  );
};
