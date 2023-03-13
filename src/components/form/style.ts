import { size } from '@dathaplus/storybook';
import { ITextField } from '@dathaplus/storybook/dist/interfaces/form/field';
import { ISelectField } from '@dathaplus/storybook/dist/interfaces/form/select';
import { IContainer } from '@dathaplus/storybook/dist/interfaces/layout/container';

export const containerForm: IContainer = {
  styles: {
    padding: '1rem 2rem',
    width: '100%',
    maxWidth: '410px',
    margin: 'auto',
  },
};

export const inputForm: ITextField = {
  fontFamily: 'Inter',
  width: '100%',
  margin: '1rem 0',
};

export const selectForm: ISelectField = {
  fontFamily: 'Inter',
  width: '100%',
};

export const containerState: IContainer = {
  styles: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0.5rem 0',
    mediaQueryBreakPoints: {
      [size.tabletL]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
  },
};
