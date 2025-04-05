import * as z from "zod";

const collaborationTypes = [
  "Seeking Collaborators",
  "Open for Mentorship",
  "Looking for Funding",
  "Hiring Team Members",
  "Open Source Contribution",
  "Seeking Partnerships",
  "Looking for Investors",
  "Offering Mentorship",
  "Looking for Research Collaboration",
  "Beta Testing",
  "Looking for Early Adopters",
] as const;

export const projectSchema = z.object({
  title: z
    .string()
    .nonempty("Title is required")
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title can't exceed 100 characters"),

  description: z
    .string()
    .nonempty("Description is required")
    .min(10, "Description must be at least 10 characters"),

  details: z
    .string()
    .nonempty("Details is required")
    .min(20, "Details must be at least 20 characters"),

  collaborationType: z.enum(collaborationTypes, {
    errorMap: () => ({ message: "Please select a valid collaboration type" }),
  }),

  skills: z
    .array(z.string().min(1, "Skill cannot be empty"))
    .min(1, "Select at least one skill"),

  contactInfo: z
    .object({
      email: z.string(),
      linkedin: z.string(),
      twitter: z.string(),
      github: z.string(),
    })
    .partial() // make all fields optional
    .optional(), // make the entire object optional
});
