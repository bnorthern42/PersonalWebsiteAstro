import { writeFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import Cite from "citation-js";

export const prerender = true; // builds a static JSON at build time

export async function GET() {
    const bib = await readFile("public/api/pubs.bib", "utf8");
    const cite = new Cite(bib);
    // Normalize to fields you'll render
    const items = cite.data.map((x: any) => ({
        id: x.id || x.DOI || x.title,
        title: x.title,
        authors: (x.author || []).map((a: any) => [a.given, a.family].filter(Boolean).join(" ")),
        year: x.issued?.["date-parts"]?.[0]?.[0] || x.issued?.raw || "",
        venue: x["container-title"] || x.publisher || "",
        doi: x.DOI || "",
        url: x.URL || (x.DOI ? `https://doi.org/${x.DOI}` : ""),
        type: x.type,
    }));
    const body = JSON.stringify(items, null, 2);
    // Optional: also write a local cache for other routes
    writeFileSync(".astro-pubs.json", body);
    return new Response(body, { headers: { "content-type": "application/json" } });
}

