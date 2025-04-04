"use server";
import { auth } from "@/auth";
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

  const { title, description } = Object.fromEntries(
    Array.from(formData).filter(
      ([key]) =>
        key !== "collaborationType" ||
        key !== "skills" ||
        key !== "contactInfo" ||
        key !== "details"
    )
  );

  const slug = slugify(title as string, { lower: true, strict: true });
  console.log("server action create", { slug, title, description });
}
