import Likes from "@/components/general/Likes";
import View from "@/components/general/View";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Project } from "@/types/Project";
import { createClient } from "@/utils/supabase/server";
import { formatDate } from "@/utils/utils";

import markdownit from "markdown-it";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
export const experimental_ppr = true;

const md = markdownit();
export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*, profiles(*)")
    .eq("slug", slug)
    .single();

  const project: Project = data;
  if (error) {
    return notFound();
  }

  const parsedContent = md.render(project?.details || "");
  console.log(project);
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
                src={project.profiles.avatar_url}
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

            <p className="category-tag p-2 text-sm bg-primary-200/80 dark:bg-primary-200 text-primary-950 rounded-lg">
              {project.collaboration_type}
            </p>
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
              className="prose max-w-4xl  font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="dark:text-slate-400 text-slate-600 text-sm sm:text-base font-normal">
              No details provided
            </p>
          )}
        </div>

        {/* <hr className="divider" /> */}

        {/**EDITOR SELECTED STARTUPS */}
        {/* {editorPosts?.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <p className="text-30-semibold">Editor Picks</p>

            <ul className="mt-7 card_grid-sm">
              {editorPosts.map((post: StartupCardType, i: number) => (
                <StartupCard key={i} post={post} />
              ))}
            </ul>
          </div>
        )} */}

        <Suspense fallback={<Skeleton className="view-skeleton" />}>
          <View slug={slug} />
        </Suspense>
      </section>
    </>
  );
}
