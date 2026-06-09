import { MetadataRoute } from "next";
import { solutions, industries, caseStudies, insights } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://coratechai.com";
  const now = new Date();

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/solutions`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/industries`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/case-studies`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/insights`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/why-ai`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/technology`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const solutionPages = solutions.map(s => ({ url: `${base}/solutions/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 }));
  const industryPages = industries.map(i => ({ url: `${base}/industries/${i.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 }));
  const caseStudyPages = caseStudies.map(cs => ({ url: `${base}/case-studies/${cs.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 }));
  const insightPages = insights.map(a => ({ url: `${base}/insights/${a.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 }));

  return [...staticPages, ...solutionPages, ...industryPages, ...caseStudyPages, ...insightPages];
}
