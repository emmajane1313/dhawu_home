import "server-only";

import type { Dictionary } from "../components/types/components.types";

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
  fa: () => import("./dictionaries/fa.json").then((module) => module.default),
  he: () => import("./dictionaries/he.json").then((module) => module.default),
  yi: () => import("./dictionaries/yi.json").then((module) => module.default),
  pt: () => import("./dictionaries/pt.json").then((module) => module.default),
  ym: () => import("./dictionaries/ym.json").then((module) => module.default),
  gd: () => import("./dictionaries/gd.json").then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  return (dictionaries[locale] ?? dictionaries.en)();
};
