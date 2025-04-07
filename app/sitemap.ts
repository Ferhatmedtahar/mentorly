import { createClient } from "@/utils/supabase/server";
import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_URL!;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createClient();
  const { data: projects } = await supabase.from("projects").select("slug");
  const { data: users } = await supabase.from("profiles").select("id");

  const projectUrls = projects
    ?.map((project: { slug: string }) => {
      return {
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.9,
      };
    })
    .flat() as MetadataRoute.Sitemap;

  const projectUrlsToEdit = projectUrls?.map((project) => {
    return { ...project, url: `${project.url}/edit` };
  }) as MetadataRoute.Sitemap;

  const usersUrls = users
    ?.map((user: { id: string }) => {
      return {
        url: `${baseUrl}/projects/${user.id}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.9,
      };
    })
    .flat() as MetadataRoute.Sitemap;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects/create-project`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    //pSEO

    ...projectUrls,
    ...projectUrlsToEdit,
    ...usersUrls,
  ];
}
