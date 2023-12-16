export interface DropdownItem {
  label: string;
  href: string;
  items?: DropdownItem[];
}

export const menuOptionsFullScreen: DropdownItem[] = [
  { label: "Home", href: "/home", items: [] },
  { label: "Contact", href: "/contact", items: [] },
  {
    label: "Code Examples",
    href: "",
    items: [
      {
        label: "Modals",
        href: "/modals",
        items: [],
      },
      {
        label: "Menus",
        href: "/menus",
        items: [],
      },
      {
        label: "Layouts",
        href: "/layouts",
        items: [],
      },
    ],
  },
];
