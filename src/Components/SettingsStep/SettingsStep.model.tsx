export default interface INavbarItems {
  id: string;
  key: string;
  content: string;
  title: string;
  items?: any;
  open?: boolean;
}

export default interface TreeTitleProps {
  open?: boolean;
}
