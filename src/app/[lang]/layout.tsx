import { LOCALES } from "../lib/constantes";
import NotFound from "./[...notFound]/page";

export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "es" },
    { lang: "ar" },
    { lang: "br" },
    { lang: "ym" },
    { lang: "gd" },
  ];
}
export type tParams = Promise<{ lang: string }>;

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  // if (!LOCALES.includes(params.lang)) {
  //   return <NotFound params={{ lang: "en" } as any} />;
  // }

  return children;
}
