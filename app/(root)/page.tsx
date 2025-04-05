import Explaination from "@/components/sections/Explaination";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";

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
