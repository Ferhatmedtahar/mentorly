import { Author } from "./Author";

export type Project = {
  id: string;
  title: string;
  description: string;
  author_id: string;
  profiles: Author;
  skills: string[];
  collaborationType: CollaborationType;
  contact_info: ContactInfo;
  likes: number;
  views: number;
  slug: string;
  created_at: string | Date; // or Date if you prefer to use Date objects
};

enum CollaborationType {
  "COLLABORATION" = "Seeking Collaborators",
  "MENTORSHIP" = "Open for Mentorship",
  "FUNDING" = "Looking for Funding",
}

export type ContactInfo = {
  email?: string;
  website?: string;
  x?: string;
  linkedin?: string;
  github?: string;
};
