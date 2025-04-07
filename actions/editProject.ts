"use server";
import { auth } from "@/auth";
import { createClient } from "@/utils/supabase/server";
import { parseServerActionResponse } from "@/utils/utils";
import { revalidatePath } from "next/cache";

export async function editProject(state: any, formData: FormData) {
  // Server action to edit a project
  const session = await auth();

  if (!session)
    return parseServerActionResponse({
      error: "Not signed in",
      status: "ERROR",
    });

  const {
    id, // Project ID is required for editing
    title,
    description,
    collaborationType,
    skills,
    contactInfo,
    details,
  } = Object.fromEntries(Array.from(formData));

  if (!id) {
    return parseServerActionResponse({
      error: "Project ID is required",
      status: "ERROR",
    });
  }

  const parsedSkills = JSON.parse(skills as string);
  const parsedContactInfo = contactInfo
    ? JSON.parse(contactInfo as string)
    : null;

  // Update project
  try {
    const supabase = await createClient();

    // First check if the user is the owner of the project
    const { data: projectData } = await supabase
      .from("projects")
      .select("author_id, slug")
      .eq("id", id)
      .single();

    if (!projectData) {
      return parseServerActionResponse({
        error: "Project not found",
        status: "ERROR",
      });
    }

    if (projectData.author_id !== session?.user?.id) {
      return parseServerActionResponse({
        error: "You don't have permission to edit this project",
        status: "ERROR",
      });
    }

    const project = {
      title,
      description,
      collaboration_type: collaborationType,
      skills: parsedSkills,
      contact_info: parsedContactInfo,
      details,
    };

    // Update the project
    const { data: result, error } = await supabase
      .from("projects")
      .update(project)
      .eq("id", id)
      .select();

    // Handle error
    if (error) {
      console.error("error", error);
      return parseServerActionResponse({
        inputs: {
          title,
          description,
        },
        error: JSON.stringify(error),
        status: "ERROR",
      });
    }

    revalidatePath("/projects");
    revalidatePath(`/projects/${projectData.slug}`); // individual project page

    return parseServerActionResponse({
      ...result[0],
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.error("error", error);
    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
      inputs: {
        title,
        description,
      },
    });
  }
}
