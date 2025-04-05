import { createClient } from "@/utils/supabase/server";
import EmptyProfile from "./EmptyProfile";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

export default async function UserProjects({
  user_id,
}: {
  readonly user_id: string;
}) {
  const supabase = await createClient();

  const { data: userProjects, error } = await supabase
    .from("projects")
    .select("* ,profiles(*)")
    .eq("author_id", user_id);
  if (error) throw new Error(error.message);
  return (
    <>
      {userProjects.length > 0 ? (
        userProjects.map((project) => (
          <ProjectCard key={project.id} {...(project as ProjectCardProps)} />
        ))
      ) : (
        <EmptyProfile />
      )}
    </>
  );
}
