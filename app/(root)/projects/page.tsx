import ProjectCard from "@/components/general/ProjectCard"; // ProjectCardProps,
import { createClient } from "@/utils/supabase/server";
import { Suspense } from "react";
import { ProjectsLoading } from "./loading";
import Pagination from "./pagination";
import ProjectsFilter from "./projects.filter";

export const dynamic = "force-dynamic";

export default async function ProjectsPage({
  searchParams,
}: {
  readonly searchParams: Promise<{
    page?: string;
    collaborationType?: string;
    skills?: string;
    sort?: "created_at" | "views";
    order?: "asc" | "desc";
    query?: string;
  }>;
}) {
  const params = await searchParams;
  const search = params?.query ?? "";
  const page = Number(params?.page);
  const pageSize = 9;
  const collaborationType = params?.collaborationType ?? "";
  const skills = params?.skills ? params.skills.split(",") : [];
  const sort = params?.sort ?? "created_at";
  const order = params?.order ?? "desc";
  const supabase = await createClient();

  // Build the query
  let query = supabase
    .from("projects")
    .select("*, profiles(*)", { count: "exact" });

  if (search) {
    query = query.ilike("title", `%${params?.query ?? ""}%`);
  }

  // Apply filters
  if (collaborationType) {
    query = query.eq("collaboration_type", collaborationType);
  }

  if (skills.length > 0) {
    // Filter by skills (array contains)
    skills.forEach((skill) => {
      query = query.contains("skills", [skill]);
    });
  }

  // Apply sorting
  query = query.order(sort, { ascending: order === "asc" });

  // Apply pagination
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data: projects, count, error } = await query.range(from, to);

  if (error) {
    throw new Error("Error fetching projects", { cause: error });
  }

  const totalPages = count ? Math.ceil(count / pageSize) : 0;
  return (
    <section className="section-container">
      <div className=" bg-primary pattern text-center !min-h-[230px] flexCenter mb-10 ">
        <h1 className="heading">Projects</h1>
      </div>
      <div>
        <Suspense fallback={<div>Loading filters...</div>}>
          <ProjectsFilter
            selectedCollaborationType={collaborationType}
            selectedSkills={skills}
            sortBy={sort}
            sortOrder={order}
            search={search}
          />
        </Suspense>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Suspense fallback={<ProjectsLoading />}>
            {projects && projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  profiles={project.profiles}
                  skills={project.skills || []}
                  collaboration_type={project.collaboration_type}
                  slug={project.slug}
                  views={project.views}
                />
              ))
            ) : (
              <div className="col-span-3 text-center py-10">
                <p className="text-lg text-muted-foreground">
                  No projects found matching your criteria.
                </p>
              </div>
            )}
          </Suspense>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination currentPage={page} totalPages={totalPages} />
        </div>
      )}
    </section>
  );
}
