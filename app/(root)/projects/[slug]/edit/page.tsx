import ProjectForm from "@/components/forms/ProjectForm";
import { createClient } from "@/utils/supabase/server";
import { notFound, redirect } from "next/navigation";

export default async function EditProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const supabase = await createClient();

  // Get the current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Get the project
  const { data: project, error } = await supabase
    .from("projects")
    .select("*, profiles(*)")
    .eq("slug", slug)
    .single();

  if (error || !project) {
    return notFound();
  }

  // Check if the current user is the project owner
  if (user.id !== project.profiles.id) {
    redirect("/projects");
  }

  return (
    <section className="section-container">
      <div className="bg-primary pattern text-center !min-h-[180px] flexCenter mb-10">
        <h1 className="heading">Edit Project</h1>
      </div>

      <ProjectForm {...project} isEditing={true} />
    </section>
  );
}
