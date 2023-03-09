import { IButtonInterfaces as IB } from '@dathaplus/storybook';

export interface ICard {
  title?: string;
  description?: string;
  button?: Pick<IB.IButton, 'actions' | 'children'>;
}
