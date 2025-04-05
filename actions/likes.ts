"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function toggleLike({
  userId,
  slug,
}: {
  userId: string;
  slug: string;
}) {
  const supabase = await createClient();

  // Get project ID
  const { data: project, error: projectError } = await supabase
    .from("projects")
    .select("id")
    .eq("slug", slug)
    .single();

  if (projectError || !project) return { error: "Project not found" };

  const projectId = project.id;

  // Check if user has already liked the project
  const { data: existingLike, error: likeError } = await supabase
    .from("likes")
    .select("*")
    .eq("user_id", userId)
    .eq("project_id", projectId)
    .single();

  if (likeError && likeError.code !== "PGRST116") {
    return { error: "Error checking like status" };
  }

  if (existingLike) {
    // User already liked, remove the like (dislike)
    await supabase.from("likes").delete().eq("id", existingLike.id);
  } else {
    // Add new like
    await supabase
      .from("likes")
      .insert([{ user_id: userId, project_id: projectId }]);
  }

  // Revalidate cache so UI updates
  revalidatePath(`/project/${slug}`);

  return { success: true };
}
