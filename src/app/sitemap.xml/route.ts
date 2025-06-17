import { NextResponse } from "next/server";
import { LOCALES } from "../lib/constantes";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://dhawu.com";

export async function GET() {
  const urls = ["/"]
    .map((path) => {
      const alternates = LOCALES.map(
        (locale) => `
        <xhtml:link 
          rel="alternate" 
          hreflang="${locale}" 
          href="${baseUrl}/${locale}${path}" />
      `
      ).join("");

      const xDefault = `
      <xhtml:link 
        rel="alternate" 
        hreflang="x-default" 
        href="${baseUrl}${path}" />
    `;

      return `
      <url>
        <loc>${baseUrl}${path}</loc>
        ${alternates}
        ${xDefault}
      </url>
    `;
    })
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
  ${urls}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
