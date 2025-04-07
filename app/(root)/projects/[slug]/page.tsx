import Likes from "@/components/general/Likes";
import ProjectCard, {
  type ProjectCardProps,
} from "@/components/general/ProjectCard";
import View from "@/components/general/View";
import ProjectActions from "@/components/general/projectActions";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { Project } from "@/types/Project";
import { createClient } from "@/utils/supabase/server";
import { formatDate } from "@/utils/utils";

import { auth } from "@/auth";
import markdownit from "markdown-it";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProjectsLoading } from "../loading";
export const experimental_ppr = true;

const md = markdownit();
export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();
  const session = await auth();
  const [{ data: user }, { data, error }] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", session?.user?.id).single(),
    supabase
      .from("projects")
      .select("*, profiles(*)")
      .eq("slug", slug)
      .single(),
  ]);
  const project: Project = data;
  if (error) {
    return notFound();
  }

  // Check if the current user is the project owner
  const isOwner = user?.id === project?.profiles?.id;

  const { data: editorPosts } = await supabase
    .from("projects")
    .select("*, profiles(*)")
    .eq("collaboration_type", project.collaboration_type)
    .neq("slug", slug)
    .limit(3)
    .order("created_at", { ascending: false });

  const parsedContent = md.render(project?.details || "");

  const contacts = Object.entries(project?.contact_info || {}).map(
    ([key, value]) => ({
      key,
      value,
    })
  );
  return (
    <>
      <section className="bg-primary pattern py-10 text-center flex items-center justify-center flex-col ">
        <p className="tag max-w-xs tag-tri">
          {formatDate(project?.created_at)}
        </p>

        <h1 className="heading">{project.title}</h1>

        <p className="sub-heading !max-w-5xl">{project.description}</p>
      </section>

      <section className="section-container">
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${project.profiles?.id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={project.profiles.avatar_url || "/placeholder.svg"}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />

              <div>
                <p className="text-20-medium">{project.profiles.name}</p>
                <p className="text-16-medium text-slate-900 dark:text-slate-400">
                  @{project.profiles.username}
                </p>
              </div>
            </Link>

            <div className="flex flex-col items-end gap-3">
              <p className="category-tag p-2 text-sm bg-primary-200/80 dark:bg-primary-200 text-primary-950 rounded-lg">
                {project.collaboration_type}
              </p>

              {/* Project Actions (Edit/Delete) */}
              <ProjectActions
                projectId={project.id}
                projectSlug={project.slug}
                isOwner={isOwner}
              />
            </div>
          </div>
          <div className="flex-between items-center">
            <h3 className="text-30-bold md:text-36-bold">Project Details</h3>

            <Suspense fallback={<Skeleton className="view-skeleton" />}>
              <Likes size={30} slug={slug} userId={project?.profiles?.id} />
            </Suspense>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.skills.length > 0
              ? project.skills.map((skill: string) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))
              : null}
          </div>
          {parsedContent ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="dark:text-slate-400 text-slate-600 text-sm sm:text-base font-normal">
              No details provided
            </p>
          )}
        </div>

        {/* contact inormation */}
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <h3 className="text-30-bold md:text-36-bold">Contact Information</h3>

          <div className="flex flex-col gap-2 md:gap-3">
            {contacts.length > 0
              ? contacts.map(
                  (contact: { key: string; value: string }) =>
                    contact.value && (
                      <Badge
                        key={contact.key}
                        variant="secondary"
                        className="text-xs p-1 md:p-1.5"
                      >
                        <Link
                          href={
                            contact.key === "email"
                              ? `mailto:${contact.value}`
                              : contact.value
                          }
                          target="_blank"
                        >
                          {contact.key}: {contact.value}
                        </Link>
                      </Badge>
                    )
                )
              : null}
          </div>
        </div>

        {editorPosts && editorPosts?.length > 0 && (
          <hr className="divider my-10 bg-secondary dark:text-secondary-300" />
        )}

        {/**EDITOR SELECTED STARTUPS */}
        <Suspense fallback={<ProjectsLoading />}>
          {editorPosts && editorPosts?.length > 0 ? (
            <div className="max-w-4xl mx-auto mt-6">
              <p className="text-30-semibold">You might also like</p>

              <ul className="mt-7 grid sm:grid-cols-2 gap-5">
                {editorPosts.map((project: ProjectCardProps) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </ul>
            </div>
          ) : null}
        </Suspense>

        <Suspense fallback={<Skeleton className="view-skeleton" />}>
          <View slug={slug} />
        </Suspense>
      </section>
    </>
  );
}
