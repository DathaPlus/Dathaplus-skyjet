import { Text } from '@dathaplus/storybook';
import { Link } from 'gatsby';
import { ILink } from 'interfaces/link';
import React, { FC } from 'react';

export const LinkComponent: FC<ILink> = ({ text, type = 'gatsby', ...props }) => (
  <>
    {type === 'gatsby' ? (
      <Link to={props.href as string}>
        <Text {...text} />
      </Link>
    ) : (
      <a {...props} style={{ textDecoration: 'none', display: 'block', width: 'fit-content' }}>
        <Text {...text} />
      </a>
    )}
  </>
);
