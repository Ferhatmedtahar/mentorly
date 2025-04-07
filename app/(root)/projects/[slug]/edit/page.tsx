import { auth } from "@/auth";
import ProjectForm from "@/components/forms/ProjectForm";
import { createClient } from "@/utils/supabase/server";
import { notFound, redirect } from "next/navigation";
import "server-only";

export async function generateMetadata({
  params,
}: {
  readonly params: Promise<{ slug: string }>;
}) {
  const supabase = await createClient();
  const { slug } = await params;

  const { data } = await supabase
    .from("projects")
    .select("title, description")
    .eq("slug", slug)
    .single();
  return {
    title: `Edit ${data?.title} | Project`,
    description: `Edit Project: ${data?.title}
    ${data?.description}`,
  };
}

export default async function EditProjectPage({
  params,
}: {
  readonly params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();
  const session = await auth();
  // Get the current user
  const user = session?.user;

  if (!user) {
    redirect("/");
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

      <ProjectForm project={project} isEditing={true} />
    </section>
  );
}
