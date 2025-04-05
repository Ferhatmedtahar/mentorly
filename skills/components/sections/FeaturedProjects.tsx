import ProjectCard, {
  ProjectCardProps,
} from "@/components/general/ProjectCard";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import NoResults from "../general/NoResults";

const FeaturedProjects = async ({ query }: { query: string | undefined }) => {
  const supabase = await createClient();
  let projects: any[] = [];
  let error;

  if (query) {
    const { data, error: queryError } = await supabase
      .from("projects")
      .select("*, profiles(*)") // Select all fields from projects and profiles
      .ilike("title", `%${query}%`) // Case-insensitive match on title
      .order("created_at", { ascending: false });

    projects = data ?? [];
    error = queryError ?? null;
  } else {
    // If no query, fetch the 6 most recent projects
    const { data, error: defaultError } = await supabase
      .from("projects")
      .select("*, profiles(*)")
      .order("created_at", { ascending: false })
      .limit(6);

    projects = data ?? [];
    error = defaultError ?? null;
  }

  if (error) {
    console.error("Error fetching projects:", error);
  } else {
    console.log("Projects with users:", projects);
  }

  return (
    <section className="py-12 md:py-16 bg-background max-container padding-container">
      <div className="flex justify-between items-center mb-8 ">
        <h2 className="text-2xl md:text-3xl text-36-bold dark:text-white text-pink-700 ">
          {query ? `Search results for "${query}"` : "Featured Projects"}
        </h2>
        <Button
          variant="outline"
          className="border-primary-600 text-brand-pink hover:bg-primary-500 hover:border-primary-800 hover:text-white transition-colors duration-200 ease-in-out"
          asChild
        >
          <Link href="/projects">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.id} {...(project as ProjectCardProps)} />
          ))
        ) : (
          <NoResults />
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
