import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: "https://coratech-ai.onrender.com/sitemap.xml",
    host: "https://coratech-ai.onrender.com",
  };
}
