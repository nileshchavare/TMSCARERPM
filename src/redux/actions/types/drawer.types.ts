export interface DrawerContent {
  title?: string;
  identifier?: `drawer-${string}`;
  componentId?: string; // Unique identifier for the component that opened this drawer
}

export interface DrawerState {
  isOpen: boolean;
  content: DrawerContent;
  closeReason?: "back-arrow" | "custom-close" | "overlay" | "programmatic";
  previousContent?: DrawerContent;
}
