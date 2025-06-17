export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "es" },
    { lang: "ar" },
    { lang: "pt" },
    { lang: "ym" },
    { lang: "gd" },
    { lang: "fa" },
    { lang: "yi" },
    { lang: "he" },
  ];
}
export type tParams = Promise<{ lang: string }>;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
