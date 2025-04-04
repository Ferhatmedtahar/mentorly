import * as z from "zod";

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  details: z.string(),
});
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
];
