"use server";
import { auth } from "@/auth";
import { createClient } from "@/utils/supabase/server";
import { parseServerActionResponse } from "@/utils/utils";
import slugify from "slugify";
export async function createProject(state: any, formData: FormData) {
  //server action to create a project
  const session = await auth();

  if (!session)
    return parseServerActionResponse({
      error: "Not signed in",
      status: "ERROR",
    });

  const {
    title,
    description,
    collaborationType,
    skills,
    contactInfo,
    details,
  } = Object.fromEntries(Array.from(formData));

  const timestamp = Date.now(); // Get current timestamp
  const slug = `${slugify(title as string, {
    lower: true,
    strict: true,
  })}-${timestamp}`;

  const parsedSkills = JSON.parse(skills as string);

  const parsedContactInfo = contactInfo
    ? JSON.parse(contactInfo as string)
    : null;

  //creation of project
  try {
    const project = {
      title,
      description,
      collaboration_type: collaborationType,
      skills: parsedSkills,
      contact_info: parsedContactInfo,
      details,
      slug,
    };
    //handle validation
    const supabase = await createClient();
    const { data: result, error } = await supabase
      .from("projects")
      .insert({
        ...project,
        author_id: session?.user?.id,
      })
      .select();
    console.log("result", result);
    //handle error
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
