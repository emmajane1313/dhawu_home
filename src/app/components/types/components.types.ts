
export enum Window {
  Gallery = "gall",
  About = "about",
  Languages = "lang",
}

export type ComponentProps = {
  dict: any;
  lang: string;
};

export type SidebarButtonProps = {
  label: string;
  icon: string;
  onClick: () => void;
};

export type SidebarProps = {
  dict: any;
};

export interface Position {
  about: { x: number; y: number };
  gallery: { x: number; y: number };
  languages: { x: number; y: number };
}

export type LanguagesProps = {
  dict: any;
  changeLanguage: (lang: string) => void;
  lang: string;
};

export type BarProps = {
  dict: any;
  info: string;
  lang: string;
  onClick: () => void;
};
