import { auth } from "@/auth";
import UserProjects from "@/components/general/UserProjects";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProjectsLoading } from "../../projects/loading";

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const supabase = await createClient();
  const { id } = await params;
  const session = await auth();

  const { data: user, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  if (!user) return notFound();
  if (error) throw new Error(error?.message);
  return (
    <section className="profile-container">
      <div className="profile-card">
        <div className="profile-title">
          <h3 className="text-30-bold !text-primary-700 uppercase text-center line-clamp-1">
            {user?.name?.split(" ")[0]}
          </h3>
        </div>

        <Image
          src={user?.avatar_url}
          alt={user?.name}
          width={220}
          height={220}
          className="profile-image"
        />

        <p className="text-30-semibold  mt-7 text-center">@{user?.username}</p>
        <p className="mt-1 text-center text-14-normal">{user?.bio}</p>
      </div>

      <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
        <p className="text-30-bold">
          {session?.user?.id === id ? "Your" : "All"} Startups
        </p>
        <ul className="mt-7 grid sm:grid-cols-2 gap-5">
          <Suspense fallback={<ProjectsLoading />}>
            <UserProjects user_id={id} />
          </Suspense>
        </ul>
      </div>
    </section>
  );
};

export default Page;
