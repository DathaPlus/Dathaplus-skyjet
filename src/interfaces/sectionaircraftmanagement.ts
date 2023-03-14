import { ReactNode } from 'react';

export interface ISectionAircraftManagement {
  image: string;
  title: ReactNode;
  info: ReactNode;
}

export type TSectionAircraftManagementBody = Omit <ISectionAircraftManagement,'image'>;
