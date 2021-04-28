export default interface SidebarMenuItem {
  key: string;
  content?: string;
  onClick(): void;
  icon?: any;
}
