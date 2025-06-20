import type { Metadata } from "next";
import "./globals.css";
import { LOCALES } from "./lib/constantes";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Dhäwu by Emma-Jane MacKinnon-Lee",
  metadataBase: new URL("https://dhawu.com/"),
  description:
    "A fragment of languages that shouldn’t have survived — but did.",
  openGraph: {
    title: "Dhäwu by Emma-Jane MacKinnon-Lee",
    description:
      "A fragment of languages that shouldn’t have survived — but did.",
  },
  twitter: {
    title: "Dhäwu by Emma-Jane MacKinnon-Lee",
    description:
      "A fragment of languages that shouldn’t have survived — but did.",
    creator: "@digitalax_",
    site: "@digitalax_",
    card: "summary_large_image",
  },
  alternates: {
    canonical: `https://dhawu.com/`,
    languages: LOCALES.reduce((acc, item) => {
      acc[item] = `https://dhawu.com/${item}/`;
      return acc;
    }, {} as { [key: string]: string }),
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [
    "Web3",
    "Web3 Fashion",
    "Moda Web3",
    "Open Source",
    "CC0",
    "Emma-Jane MacKinnon-Lee",
    "Open Source LLMs",
    "DIGITALAX",
    "F3Manifesto",
    "digitalax.xyz",
    "f3manifesto.xyz",
    "Women",
    "Life",
    "Freedom",
  ],
  creator: "Emma-Jane MacKinnon-Lee",
  publisher: "Emma-Jane MacKinnon-Lee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Emma-Jane MacKinnon-Lee",
              url: "https://emmajanemackinnonlee.com/",
              sameAs: [
                "https://twitter.com/emmajane1313",
                "https://emmajanemackinnonlee.com/",
                "https://syntheticfutures.xyz/",
                "https://web3fashion.xyz/",
                "https://emancipa.xyz/",
                "https://highlangu.com/",
                "https://digitalax.xyz/",
                "https://cc0web3fashion.com/",
                "https://cc0web3.com/",
                "https://cuntism.net/",
                "https://dhawu.com/",
                "https://casadeespejos.com/",
                "https://emancipa.net/",
                "https://dhawu.emancipa.xyz/",
                "https://highlangu.emancipa.xyz/",
                "https://twitter.com/emmajane1313",
                "https://medium.com/@casadeespejos",
                "https://www.flickr.com/photos/emmajanemackinnonlee/",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
