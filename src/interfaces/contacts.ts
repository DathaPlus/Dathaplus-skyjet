export interface IContacts {
  title:string;
  subtitle:string;
  cellphoneButton:IButtonContacts;
  emailButton:IButtonContacts;

}
interface IButtonContacts {
  label:string;
  onClick:((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
}
