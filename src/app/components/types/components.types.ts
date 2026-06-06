
export enum Window {
  Gallery = "gall",
  About = "about",
  Languages = "lang",
}

export type Dictionary = Record<string, string>;

export type ComponentProps = {
  dict: Dictionary;
  lang: string;
};

export type SidebarButtonProps = {
  label?: string;
  icon: string;
  onClick: () => void;
};

export type SidebarProps = {
  dict: Dictionary;
};

export interface Position {
  about: { x: number; y: number };
  gallery: { x: number; y: number };
  languages: { x: number; y: number };
}

export type LanguagesProps = {
  dict: Dictionary;
  changeLanguage: (lang: string) => void;
  lang: string;
};

export type BarProps = {
  dict: Dictionary;
  info?: string;
  lang: string;
  onClick: () => void;
};
