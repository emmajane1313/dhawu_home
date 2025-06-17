export const LOCALES: string[] = [
  "ym",
  "gd",
  "es",
  "br",
  "en",
  "ar",
  "fa",
  "he",
  "yi",
];
export const LOCALES_DISPLAY: string[] = [
  "ŋ",
  "gd",
  "es",
  "br",
  "en",
  "ع",
  "د",
  "א",
  "ט",
];

export const PAGINAS: {
  titulo: string;
  cover: string;
  enlace: string;
  active?: boolean;
}[] = [
  {
    titulo: "Gupapuyŋu",
    cover: "/images/gupa.png",
    enlace: "https://dhawu.emancipa.xyz/",
    active: true,
  },
  {
    titulo: "Gàidhlig",
    cover: "/images/scot.png",
    enlace: "https://duthchas.emancipa.xyz/",
  },
];

export const itemStringToLocale: { [key: string]: string } = {
  ["ŋ"]: "ym",
  ["gd"]: "gd",
  ["es"]: "es",
  ["en"]: "en",
  ["br"]: "br",
  ["ع"]: "ar",
  ["د"]: "fa",
  ["א"]: "he",
  ["ט"]: "yi",
};

export const itemLocaleToString: { [key: string]: string } = {
  ["ym"]: "ŋ",
  ["gd"]: "gd",
  ["es"]: "es",
  ["en"]: "en",
  ["br"]: "br",
  ["ar"]: "ع",
  ["fa"]: "د",
  ["he"]: "א",
  ["yi"]: "ט",
};
