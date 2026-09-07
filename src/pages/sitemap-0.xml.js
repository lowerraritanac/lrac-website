import { getCollection } from "astro:content";
import { athletes } from "../../data/athletes.js";

const SITE_URL = "https://lowerraritanac.com";

const fixedRoutes = [
  "/",
  "/about/",
  "/athletes/",
  "/coaching/",
  "/racing/",
  "/training/",
  "/training/analytics/",
  "/training/liam-tilton/",
  "/training/aaron-wysocki/",
];

const escapeXml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export async function GET() {
  const posts = await getCollection("training", ({ data }) => data.visibility !== "athlete-only");

  const urls = [
    ...fixedRoutes.map((path) => ({ loc: `${SITE_URL}${path}` })),
    ...athletes.map((athlete) => ({ loc: `${SITE_URL}/athletes/${athlete.slug}/` })),
    ...posts.map((post) => ({
      loc: `${SITE_URL}/training/${post.id}/`,
      lastmod: post.data.date.toISOString().slice(0, 10),
    })),
  ];

  const entries = urls
    .map(
      ({ loc, lastmod }) =>
        `  <url>\n    <loc>${escapeXml(loc)}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}\n  </url>`,
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
