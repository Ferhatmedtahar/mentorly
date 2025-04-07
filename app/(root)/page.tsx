import Explaination from "@/components/sections/Explaination";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import "server-only";

export const metadata = {
  title: "Mentorly",
  description:
    "Mentorly is a collaborative platform connecting developers, designers, and tech professionals to co-create projects, share mentorship, and access funding opportunities.",
  keywords: [
    "Mentorly",
    "Collaborative platform",
    "Tech mentorship",
    "Project collaboration",
    "Open source",
    "Startups",
    "Developer community",
    "Designers",
    "Funding",
    "Innovation",
  ],
  openGraph: {
    title: "Mentorly – Collaborate, Build, and Launch Ideas",
    description:
      "Join Mentorly, the platform where developers and creatives unite to turn ideas into impactful projects through mentorship and support.",
    url: "https://mentorly-beryl.vercel.app/", // Replace with your actual domain
    siteName: "Mentorly",
    // images: [
    //   {
    //     url: "https://your-domain.com/og-image.jpg", // Add a real image URL
    //     width: 1200,
    //     height: 630,
    //     alt: "Mentorly preview image",
    //   },
    // ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentorly – Collaborate, Build, and Launch Ideas",
    description:
      "Mentorly connects tech professionals to bring innovative projects to life through mentorship and collaboration.",
    // images: ["https://your-domain.com/twitter-image.jpg"], // Same as OG image or different
    creator: "@FerhatMedTahar", // Optional
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://mentorly-beryl.vercel.app/",
  },
};
export default async function Home({
  searchParams,
}: {
  readonly searchParams: Promise<{ query: string | undefined }>;
}) {
  const { query } = await searchParams;
  return (
    <>
      <Hero query={query} />
      <FeaturedProjects query={query} />
      <Explaination />
    </>
  );
}
