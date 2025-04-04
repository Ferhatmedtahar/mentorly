// "use client";
// import MDEditor from "@uiw/react-md-editor";
// import { useActionState, useState } from "react";
// import { Button } from "../ui/button";
// import { Label } from "../ui/label";
// import { Textarea } from "../ui/textarea";
// import { projectSchema } from "@/lib/validation";
// import { createProject } from "@/actions/createProject";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// import { z } from "zod";

// export default function ProjectForm() {
//   const router = useRouter();
//   const [details, setDetails] = useState<string>("");
//   const [errors, setErrors] = useState<Record<string, string[]>>({});
//   const [state, formAction, isPending] = useActionState(handleSubmit, {
//     error: "",
//     state: "INITIAL",
//   });
//   async function handleSubmit(prevState: any, formData: FormData) {
//     try {
//       const fromValues = {
//         title: formData.get("title") as string,
//         description: formData.get("description") as string,
//         details,
//         //add the fields to the formData
//       };
//       //validation check using zod function and the validation from the lib folder
//       await projectSchema.parseAsync(fromValues);
//       const result = await createProject(prevState, formData, details);
//       if (result.STATUS == "SUCCESS") {
//         toast.success("Project Created Successfully");
//         router.push(`/projects/${result.slug}`);
//       }
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         const fieldErrors = error.flatten().fieldErrors;
//         setErrors(fieldErrors as unknown as Record<string, string[]>);
//         return { ...prevState, state: "ERROR", error: "Validation Error" };
//       }
//       return {
//         ...prevState,
//         state: "ERROR",
//         error: "An unexpected error occurred",
//       };
//     }
//     return {
//       state: "SUBMITTED",
//       error: "",
//     };
//   }

//   return (
//     <form className="project-form" action={formAction}>
//       <div>
//         <Label className="project-form-label">title</Label>
//         <input
//           name="title"
//           type="text"
//           className="project-form-input"
//           placeholder="Title of your Project"
//           required
//         />
//         {errors.title && (
//           <p className="project-form-error capitalize">{errors.title[0]}</p>
//         )}
//       </div>
//       <div>
//         <Label className="project-form-label">description</Label>
//         <Textarea
//           name="description"
//           className="project-form-textarea"
//           placeholder="Description of your Project"
//           required
//         />
//         {errors.description && (
//           <p className="project-form-error">{errors.description[0]}</p>
//         )}
//       </div>
//       <MDEditor
//         id="details"
//         preview="edit"
//         height={300}
//         value={details}
//         onChange={(value) => setDetails(value as string)}
//         className="startup-form-editor"
//         // style={{ borderRadius: 20, overflow: "hidden" }}
//         textareaProps={{
//           placeholder: "Details of your Project",
//         }}
//         previewOptions={{
//           disallowedElements: ["style"],
//         }}
//       />
//       <Button type="submit" className="project-form-button">
//         {isPending ? "Submitting..." : "Submit"}
//       </Button>
//     </form>
//   );
// }

// "use client";
// import { createProject } from "@/actions/createProject";
// import { Badge } from "@/components/ui/badge";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { cn } from "@/lib/utils";
// import { projectSchema } from "@/lib/validation";
// import MDEditor from "@uiw/react-md-editor";
// import { Check, ChevronsUpDown, X } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { useActionState, useState } from "react";
// import { toast } from "sonner";
// import { z } from "zod";
// import { Button } from "../ui/button";
// import { Label } from "../ui/label";
// import { Textarea } from "../ui/textarea";

// const collaborationTypes = [
//   "Seeking Collaborators",
//   "Open for Mentorship",
//   "Looking for Funding",

//   "Hiring Team Members",
//   "Open Source Contribution",

//   "Seeking Partnerships",
//   "Looking for Investors",

//   "Offering Mentorship",

//   "Looking for Research Collaboration",
//   "Beta Testing",
//   "Looking for Early Adopters",
// ];
// const skillsOptions = [
//   // Front-End Technologies
//   { value: "react", label: "React", category: "Front-End Technologies" },
//   { value: "angular", label: "Angular", category: "Front-End Technologies" },
//   { value: "vue", label: "Vue.js", category: "Front-End Technologies" },
//   { value: "html-css", label: "HTML/CSS", category: "Front-End Technologies" },
//   {
//     value: "javascript-frontend",
//     label: "JavaScript",
//     category: "Front-End Technologies",
//   },
//   {
//     value: "typescript-frontend",
//     label: "TypeScript",
//     category: "Front-End Technologies",
//   },
//   { value: "svelte", label: "Svelte", category: "Front-End Technologies" },
//   {
//     value: "bootstrap",
//     label: "Bootstrap",
//     category: "Front-End Technologies",
//   },
//   {
//     value: "tailwind",
//     label: "Tailwind CSS",
//     category: "Front-End Technologies",
//   },
//   { value: "jquery", label: "jQuery", category: "Front-End Technologies" },

//   // Back-End Technologies
//   { value: "nodejs", label: "Node.js", category: "Back-End Technologies" },
//   { value: "raygun", label: "Raygun", category: "Back-End Technologies" },
//   { value: "express", label: "Express.js", category: "Back-End Technologies" },
//   { value: "django", label: "Django", category: "Back-End Technologies" },
//   { value: "flask", label: "Flask", category: "Back-End Technologies" },
//   { value: "rails", label: "Ruby on Rails", category: "Back-End Technologies" },
//   { value: "aspnet", label: "ASP.NET", category: "Back-End Technologies" },
//   {
//     value: "spring-boot",
//     label: "Spring Boot",
//     category: "Back-End Technologies",
//   },
//   { value: "laravel", label: "Laravel", category: "Back-End Technologies" },
//   { value: "nestjs", label: "NestJS", category: "Back-End Technologies" },
//   { value: "koa", label: "Koa.js", category: "Back-End Technologies" },

//   // Programming Languages
//   {
//     value: "javascript",
//     label: "JavaScript",
//     category: "Programming Languages",
//   },
//   {
//     value: "typescript",
//     label: "TypeScript",
//     category: "Programming Languages",
//   },
//   { value: "python", label: "Python", category: "Programming Languages" },
//   { value: "java", label: "Java", category: "Programming Languages" },
//   { value: "csharp", label: "C#", category: "Programming Languages" },
//   { value: "ruby", label: "Ruby", category: "Programming Languages" },
//   { value: "php", label: "PHP", category: "Programming Languages" },
//   { value: "go", label: "Go", category: "Programming Languages" },
//   { value: "rust", label: "Rust", category: "Programming Languages" },
//   { value: "swift", label: "Swift", category: "Programming Languages" },
//   { value: "kotlin", label: "Kotlin", category: "Programming Languages" },
//   { value: "cpp", label: "C++", category: "Programming Languages" },
//   { value: "c", label: "C", category: "Programming Languages" },
//   { value: "r", label: "R", category: "Programming Languages" },
//   {
//     value: "objective-c",
//     label: "Objective-C",
//     category: "Programming Languages",
//   },
//   { value: "scala", label: "Scala", category: "Programming Languages" },
//   { value: "perl", label: "Perl", category: "Programming Languages" },
//   { value: "haskell", label: "Haskell", category: "Programming Languages" },
//   { value: "lua", label: "Lua", category: "Programming Languages" },
//   { value: "dart", label: "Dart", category: "Programming Languages" },
//   { value: "elixir", label: "Elixir", category: "Programming Languages" },
//   { value: "clojure", label: "Clojure", category: "Programming Languages" },
//   { value: "fsharp", label: "F#", category: "Programming Languages" },
//   {
//     value: "shell",
//     label: "Shell Scripting",
//     category: "Programming Languages",
//   },
//   { value: "sql", label: "SQL", category: "Programming Languages" },
//   { value: "nosql", label: "NoSQL", category: "Programming Languages" },

//   // Roles
//   { value: "frontend-dev", label: "Front-End Developer", category: "Roles" },
//   { value: "backend-dev", label: "Back-End Developer", category: "Roles" },
//   { value: "fullstack-dev", label: "Full-Stack Developer", category: "Roles" },
//   { value: "ui-ux", label: "UI/UX Designer", category: "Roles" },
//   { value: "devops", label: "DevOps Engineer", category: "Roles" },
//   { value: "data-scientist", label: "Data Scientist", category: "Roles" },
//   {
//     value: "ml-engineer",
//     label: "Machine Learning Engineer",
//     category: "Roles",
//   },
//   { value: "mobile-dev", label: "Mobile Developer", category: "Roles" },
//   {
//     value: "embedded-engineer",
//     label: "Embedded Systems Engineer",
//     category: "Roles",
//   },
//   { value: "blockchain-dev", label: "Blockchain Developer", category: "Roles" },
//   { value: "game-dev", label: "Game Developer", category: "Roles" },
//   { value: "security-analyst", label: "Security Analyst", category: "Roles" },
//   { value: "dba", label: "Database Administrator", category: "Roles" },
//   { value: "sysadmin", label: "System Administrator", category: "Roles" },
//   { value: "fullstack-academy", label: "Fullstack Academy", category: "Roles" },
//   {
//     value: "software-architect",
//     label: "Software Architect",
//     category: "Roles",
//   },
//   { value: "product-manager", label: "Product Manager", category: "Roles" },
//   { value: "business-analyst", label: "Business Analyst", category: "Roles" },
//   {
//     value: "qa-engineer",
//     label: "Quality Assurance Engineer",
//     category: "Roles",
//   },
//   {
//     value: "tech-support",
//     label: "Technical Support Specialist",
//     category: "Roles",
//   },
//   { value: "network-engineer", label: "Network Engineer", category: "Roles" },
//   { value: "cloud-engineer", label: "Cloud Engineer", category: "Roles" },
//   { value: "ai-researcher", label: "AI Researcher", category: "Roles" },
//   { value: "data-engineer", label: "Data Engineer", category: "Roles" },
//   { value: "software-tester", label: "Software Tester", category: "Roles" },
//   { value: "it-consultant", label: "IT Consultant", category: "Roles" },
//   { value: "scrum-master", label: "Scrum Master", category: "Roles" },
//   { value: "project-manager", label: "Project Manager", category: "Roles" },
//   { value: "tech-writer", label: "Technical Writer", category: "Roles" },
//   { value: "security-engineer", label: "Security Engineer", category: "Roles" },
//   { value: "sre", label: "Site Reliability Engineer", category: "Roles" },
//   {
//     value: "cv-engineer",
//     label: "Computer Vision Engineer",
//     category: "Roles",
//   },
//   {
//     value: "nlp-engineer",
//     label: "Natural Language Processing Engineer",
//     category: "Roles",
//   },
//   { value: "robotics-engineer", label: "Robotics Engineer", category: "Roles" },
//   { value: "iot-dev", label: "IoT Developer", category: "Roles" },
//   { value: "ar-vr-dev", label: "AR/VR Developer", category: "Roles" },
//   { value: "game-designer", label: "Game Designer", category: "Roles" },
//   { value: "game-artist", label: "Game Artist", category: "Roles" },
// ];

// // Group skills by category
// const groupedSkills = skillsOptions.reduce((acc, skill) => {
//   if (!acc[skill.category]) {
//     acc[skill.category] = [];
//   }
//   acc[skill.category].push(skill);
//   return acc;
// }, {} as Record<string, typeof skillsOptions>);

// export default function ProjectForm() {
//   const router = useRouter();
//   const [details, setDetails] = useState<string>("");
//   const [collaborationType, setCollaborationType] = useState<string>("");
//   const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
//   const [skillsOpen, setSkillsOpen] = useState(false);
//   const [errors, setErrors] = useState<Record<string, string[]>>({});

//   const [state, formAction, isPending] = useActionState(handleSubmit, {
//     error: "",
//     state: "INITIAL",
//   });

//   async function handleSubmit(prevState: any, formData: FormData) {
//     try {
//       const fromValues = {
//         title: formData.get("title") as string,
//         description: formData.get("description") as string,
//         details,
//         collaborationType,
//         skills: selectedSkills,
//       };

//       // validation check using zod function and the validation from the lib folder
//       await projectSchema.parseAsync(fromValues);

//       // Add the fields to the formData
//       formData.append("collaborationType", collaborationType);
//       formData.append("skills", JSON.stringify(selectedSkills));

//       const result = await createProject(prevState, formData, details);
//       if (result.STATUS == "SUCCESS") {
//         toast.success("Project Created Successfully");
//         router.push(`/projects/${result.slug}`);
//       }
//     } catch (error) {
//       toast.error("Project could not be submitted", {
//         description: "Please check your inputs and try again.",
//       });
//       if (error instanceof z.ZodError) {
//         const fieldErrors = error.flatten().fieldErrors;
//         setErrors(fieldErrors as unknown as Record<string, string[]>);
//         return { ...prevState, state: "ERROR", error: "Validation Error" };
//       }
//       return {
//         ...prevState,
//         state: "ERROR",
//         error: "An unexpected error occurred",
//       };
//     }
//     return {
//       state: "SUBMITTED",
//       error: "",
//     };
//   }

//   const removeSkill = (skill: string) => {
//     setSelectedSkills(selectedSkills.filter((s) => s !== skill));
//   };

//   return (
//     <form className="project-form" action={formAction}>
//       <div>
//         <Label className="project-form-label">title</Label>
//         <input
//           name="title"
//           type="text"
//           className="project-form-input"
//           placeholder="Title of your Project"
//           required
//         />
//         {errors.title && (
//           <p className="project-form-error capitalize">{errors.title[0]}</p>
//         )}
//       </div>

//       <div>
//         <Label className="project-form-label">description</Label>
//         <Textarea
//           name="description"
//           className="project-form-textarea"
//           placeholder="Description of your Project"
//           required
//         />
//         {errors.description && (
//           <p className="project-form-error">{errors.description[0]}</p>
//         )}
//       </div>

//       <div>
//         <Label className="project-form-label">collaboration type</Label>
//         <Select value={collaborationType} onValueChange={setCollaborationType}>
//           <SelectTrigger className="project-form-input mt-3">
//             <SelectValue placeholder="Select collaboration type" />
//           </SelectTrigger>
//           <SelectContent>
//             {collaborationTypes.map((type) => (
//               <SelectItem key={type} value={type}>
//                 {type}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//         {errors.collaborationType && (
//           <p className="project-form-error">{errors.collaborationType[0]}</p>
//         )}
//       </div>

//       <div>
//         <Label className="project-form-label">skills</Label>
//         <div className="relative mt-3">
//           <Popover open={skillsOpen} onOpenChange={setSkillsOpen}>
//             <PopoverTrigger asChild>
//               <Button
//                 variant="outline"
//                 role="combobox"
//                 aria-expanded={skillsOpen}
//                 className="project-form-input w-full justify-between"
//               >
//                 {selectedSkills.length > 0
//                   ? `${selectedSkills.length} selected`
//                   : "Select skills"}
//                 <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-full p-0" align="start">
//               <Command>
//                 <CommandInput placeholder="Search skills..." />
//                 <CommandEmpty>No skill found.</CommandEmpty>
//                 <CommandList className="max-h-[300px]">
//                   {Object.entries(groupedSkills).map(([category, skills]) => (
//                     <CommandGroup key={category} heading={category}>
//                       {skills.map((skill) => {
//                         const isSelected = selectedSkills.includes(skill.label);
//                         return (
//                           <CommandItem
//                             key={skill.value}
//                             value={skill.value}
//                             onSelect={() => {
//                               if (isSelected) {
//                                 setSelectedSkills(
//                                   selectedSkills.filter(
//                                     (s) => s !== skill.label
//                                   )
//                                 );
//                               } else {
//                                 setSelectedSkills([
//                                   ...selectedSkills,
//                                   skill.label,
//                                 ]);
//                               }
//                             }}
//                           >
//                             <Check
//                               className={cn(
//                                 "mr-2 h-4 w-4",
//                                 isSelected ? "opacity-100" : "opacity-0"
//                               )}
//                             />
//                             {skill.label}
//                           </CommandItem>
//                         );
//                       })}
//                     </CommandGroup>
//                   ))}
//                 </CommandList>
//               </Command>
//             </PopoverContent>
//           </Popover>
//         </div>

//         {selectedSkills.length > 0 && (
//           <div className="flex flex-wrap gap-2 mt-3">
//             {selectedSkills.map((skill) => (
//               <Badge key={skill} className="px-3 py-1 flex items-center gap-1">
//                 {skill}
//                 <X
//                   className="h-3 w-3 cursor-pointer"
//                   onClick={() => removeSkill(skill)}
//                 />
//               </Badge>
//             ))}
//           </div>
//         )}

//         {errors.skills && (
//           <p className="project-form-error">{errors.skills[0]}</p>
//         )}
//       </div>

//       <MDEditor
//         id="details"
//         preview="edit"
//         height={300}
//         value={details}
//         onChange={(value) => setDetails(value as string)}
//         className="startup-form-editor"
//         textareaProps={{
//           placeholder: "Details of your Project",
//         }}
//         previewOptions={{
//           disallowedElements: ["style"],
//         }}
//       />

//       <Button type="submit" className="project-form-button">
//         {isPending ? "Submitting..." : "Submit"}
//       </Button>
//     </form>
//   );
// }

"use client";
import { createProject } from "@/actions/createProject";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { projectSchema } from "@/lib/validation";
import MDEditor from "@uiw/react-md-editor";
import {
  Check,
  ChevronsUpDown,
  Github,
  Linkedin,
  Mail,
  Twitter,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import ContactInputGroup from "./ContactInfo";

// const collaborationTypes = ["Seeking Collaborators", "Open for Mentorship", "Looking for Funding"]
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
const skillsOptions = [
  // Front-End Technologies
  { value: "react", label: "React", category: "Front-End Technologies" },
  { value: "angular", label: "Angular", category: "Front-End Technologies" },
  { value: "vue", label: "Vue.js", category: "Front-End Technologies" },
  { value: "html-css", label: "HTML/CSS", category: "Front-End Technologies" },
  {
    value: "javascript-frontend",
    label: "JavaScript",
    category: "Front-End Technologies",
  },
  {
    value: "typescript-frontend",
    label: "TypeScript",
    category: "Front-End Technologies",
  },
  { value: "svelte", label: "Svelte", category: "Front-End Technologies" },
  {
    value: "bootstrap",
    label: "Bootstrap",
    category: "Front-End Technologies",
  },
  {
    value: "tailwind",
    label: "Tailwind CSS",
    category: "Front-End Technologies",
  },
  { value: "jquery", label: "jQuery", category: "Front-End Technologies" },

  // Back-End Technologies
  { value: "nodejs", label: "Node.js", category: "Back-End Technologies" },
  { value: "raygun", label: "Raygun", category: "Back-End Technologies" },
  { value: "express", label: "Express.js", category: "Back-End Technologies" },
  { value: "django", label: "Django", category: "Back-End Technologies" },
  { value: "flask", label: "Flask", category: "Back-End Technologies" },
  { value: "rails", label: "Ruby on Rails", category: "Back-End Technologies" },
  { value: "aspnet", label: "ASP.NET", category: "Back-End Technologies" },
  {
    value: "spring-boot",
    label: "Spring Boot",
    category: "Back-End Technologies",
  },
  { value: "laravel", label: "Laravel", category: "Back-End Technologies" },
  { value: "nestjs", label: "NestJS", category: "Back-End Technologies" },
  { value: "koa", label: "Koa.js", category: "Back-End Technologies" },

  // Programming Languages
  {
    value: "javascript",
    label: "JavaScript",
    category: "Programming Languages",
  },
  {
    value: "typescript",
    label: "TypeScript",
    category: "Programming Languages",
  },
  { value: "python", label: "Python", category: "Programming Languages" },
  { value: "java", label: "Java", category: "Programming Languages" },
  { value: "csharp", label: "C#", category: "Programming Languages" },
  { value: "ruby", label: "Ruby", category: "Programming Languages" },
  { value: "php", label: "PHP", category: "Programming Languages" },
  { value: "go", label: "Go", category: "Programming Languages" },
  { value: "rust", label: "Rust", category: "Programming Languages" },
  { value: "swift", label: "Swift", category: "Programming Languages" },
  { value: "kotlin", label: "Kotlin", category: "Programming Languages" },
  { value: "cpp", label: "C++", category: "Programming Languages" },
  { value: "c", label: "C", category: "Programming Languages" },
  { value: "r", label: "R", category: "Programming Languages" },
  {
    value: "objective-c",
    label: "Objective-C",
    category: "Programming Languages",
  },
  { value: "scala", label: "Scala", category: "Programming Languages" },
  { value: "perl", label: "Perl", category: "Programming Languages" },
  { value: "haskell", label: "Haskell", category: "Programming Languages" },
  { value: "lua", label: "Lua", category: "Programming Languages" },
  { value: "dart", label: "Dart", category: "Programming Languages" },
  { value: "elixir", label: "Elixir", category: "Programming Languages" },
  { value: "clojure", label: "Clojure", category: "Programming Languages" },
  { value: "fsharp", label: "F#", category: "Programming Languages" },
  {
    value: "shell",
    label: "Shell Scripting",
    category: "Programming Languages",
  },
  { value: "sql", label: "SQL", category: "Programming Languages" },
  { value: "nosql", label: "NoSQL", category: "Programming Languages" },

  // Roles
  { value: "frontend-dev", label: "Front-End Developer", category: "Roles" },
  { value: "backend-dev", label: "Back-End Developer", category: "Roles" },
  { value: "fullstack-dev", label: "Full-Stack Developer", category: "Roles" },
  { value: "ui-ux", label: "UI/UX Designer", category: "Roles" },
  { value: "devops", label: "DevOps Engineer", category: "Roles" },
  { value: "data-scientist", label: "Data Scientist", category: "Roles" },
  {
    value: "ml-engineer",
    label: "Machine Learning Engineer",
    category: "Roles",
  },
  { value: "mobile-dev", label: "Mobile Developer", category: "Roles" },
  {
    value: "embedded-engineer",
    label: "Embedded Systems Engineer",
    category: "Roles",
  },
  { value: "blockchain-dev", label: "Blockchain Developer", category: "Roles" },
  { value: "game-dev", label: "Game Developer", category: "Roles" },
  { value: "security-analyst", label: "Security Analyst", category: "Roles" },
  { value: "dba", label: "Database Administrator", category: "Roles" },
  { value: "sysadmin", label: "System Administrator", category: "Roles" },

  {
    value: "software-architect",
    label: "Software Architect",
    category: "Roles",
  },
  { value: "product-manager", label: "Product Manager", category: "Roles" },
  { value: "business-analyst", label: "Business Analyst", category: "Roles" },
  {
    value: "qa-engineer",
    label: "Quality Assurance Engineer",
    category: "Roles",
  },
  {
    value: "tech-support",
    label: "Technical Support Specialist",
    category: "Roles",
  },
  { value: "network-engineer", label: "Network Engineer", category: "Roles" },
  { value: "cloud-engineer", label: "Cloud Engineer", category: "Roles" },
  { value: "ai-researcher", label: "AI Researcher", category: "Roles" },
  { value: "data-engineer", label: "Data Engineer", category: "Roles" },
  { value: "software-tester", label: "Software Tester", category: "Roles" },
  { value: "it-consultant", label: "IT Consultant", category: "Roles" },
  { value: "scrum-master", label: "Scrum Master", category: "Roles" },
  { value: "project-manager", label: "Project Manager", category: "Roles" },
  { value: "tech-writer", label: "Technical Writer", category: "Roles" },
  { value: "security-engineer", label: "Security Engineer", category: "Roles" },
  { value: "sre", label: "Site Reliability Engineer", category: "Roles" },
  {
    value: "cv-engineer",
    label: "Computer Vision Engineer",
    category: "Roles",
  },
  {
    value: "nlp-engineer",
    label: "Natural Language Processing Engineer",
    category: "Roles",
  },
  { value: "robotics-engineer", label: "Robotics Engineer", category: "Roles" },
  { value: "iot-dev", label: "IoT Developer", category: "Roles" },
  { value: "ar-vr-dev", label: "AR/VR Developer", category: "Roles" },
  { value: "game-designer", label: "Game Designer", category: "Roles" },
  { value: "game-artist", label: "Game Artist", category: "Roles" },
];

// Group skills by category
const groupedSkills = skillsOptions.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, typeof skillsOptions>);

export default function ProjectForm() {
  const router = useRouter();
  const [details, setDetails] = useState<string>("");
  const [collaborationType, setCollaborationType] = useState<string>("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  // Contact info state
  const [contactInfo, setContactInfo] = useState({
    email: "",
    linkedin: "",
    twitter: "",
    github: "",
  });

  const [state, formAction, isPending] = useActionState(handleSubmit, {
    error: "",
    state: "INITIAL",
  });

  // Handle contact info changes
  const handleContactInfoChange = (
    field: keyof typeof contactInfo,
    value: string
  ) => {
    setContactInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  async function handleSubmit(prevState: any, formData: FormData) {
    try {
      const fromValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        details,
        collaborationType,
        skills: selectedSkills,
        contactInfo,
      };

      // validation check using zod function and the validation from the lib folder
      await projectSchema.parseAsync(fromValues);

      // Add the fields to the formData
      formData.append("collaborationType", collaborationType);
      formData.append("skills", JSON.stringify(selectedSkills));
      formData.append("contactInfo", JSON.stringify(contactInfo));

      const result = await createProject(prevState, formData, details);
      if (result.STATUS == "SUCCESS") {
        toast.success("Project Created Successfully");
        router.push(`/projects/${result.slug}`);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors as unknown as Record<string, string[]>);
        return { ...prevState, state: "ERROR", error: "Validation Error" };
      }
      return {
        ...prevState,
        state: "ERROR",
        error: "An unexpected error occurred",
      };
    }
    return {
      state: "SUBMITTED",
      error: "",
    };
  }

  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  return (
    <form className="project-form" action={formAction}>
      <div>
        <Label className="project-form-label">title</Label>
        <input
          name="title"
          type="text"
          className="project-form-input"
          placeholder="Title of your Project"
          required
        />
        {errors.title && (
          <p className="project-form-error capitalize">{errors.title[0]}</p>
        )}
      </div>

      <div>
        <Label className="project-form-label">description</Label>
        <Textarea
          name="description"
          className="project-form-textarea"
          placeholder="Description of your Project"
          required
        />
        {errors.description && (
          <p className="project-form-error">{errors.description[0]}</p>
        )}
      </div>

      <div>
        <Label className="project-form-label">collaboration type</Label>
        <Select value={collaborationType} onValueChange={setCollaborationType}>
          <SelectTrigger className="project-form-input mt-3 ">
            <SelectValue placeholder="Select collaboration type" />
          </SelectTrigger>
          <SelectContent className="bg-primary-50 dark:bg-primary-100">
            {collaborationTypes.map((type) => (
              <SelectItem
                key={type}
                value={type}
                className="text-black hover:bg-primary-200 dark:hover:bg-primary-300"
              >
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.collaborationType && (
          <p className="project-form-error">{errors.collaborationType[0]}</p>
        )}
      </div>

      <div>
        <Label className="project-form-label">skills</Label>
        <div className="relative mt-3">
          <Popover open={skillsOpen} onOpenChange={setSkillsOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="project-form-input w-full justify-between "
              >
                {selectedSkills.length > 0 ? (
                  <span className="text-slate-500 dark:text-slate-200">
                    {selectedSkills.length} selected
                  </span>
                ) : (
                  <span className="text-slate-500 dark:text-slate-200">
                    Select skills
                  </span>
                )}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 " />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0  " align="start">
              <Command className="bg-primary-50 dark:bg-primary-100">
                <CommandInput placeholder="Search skills..." />
                <CommandEmpty className="text-black bg-primary-50 dark:bg-primary-100 p-2 text-sm">
                  No skill found.
                </CommandEmpty>
                <CommandList className="max-h-[300px] bg-primary-50 dark:bg-primary-100">
                  {Object.entries(groupedSkills).map(([category, skills]) => (
                    <CommandGroup
                      key={category}
                      heading={category}
                      className="text-black"
                    >
                      {skills.map((skill) => {
                        const isSelected = selectedSkills.includes(skill.label);
                        return (
                          <CommandItem
                            key={skill.value}
                            value={skill.value}
                            className="cursor-pointer "
                            onSelect={() => {
                              if (isSelected) {
                                setSelectedSkills(
                                  selectedSkills.filter(
                                    (s) => s !== skill.label
                                  )
                                );
                              } else {
                                setSelectedSkills([
                                  ...selectedSkills,
                                  skill.label,
                                ]);
                              }
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                isSelected ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {skill.label}
                          </CommandItem>
                        );
                      })}
                    </CommandGroup>
                  ))}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {selectedSkills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {selectedSkills.map((skill) => (
              <div
                key={skill}
                className="px-3 py-1 flex items-center gap-1 bg-primary rounded-md text-white text-sm"
              >
                {skill}
                <X
                  className="h-3 w-3  cursor-pointer"
                  onClick={() => removeSkill(skill)}
                />
              </div>
            ))}
          </div>
        )}

        {errors.skills && (
          <p className="project-form-error">{errors.skills[0]}</p>
        )}
      </div>

      {/* Contact Information */}
      <ContactInputGroup
        contactInfo={contactInfo}
        onChange={handleContactInfoChange}
        errors={errors}
      />
      <div>
        <Label className="project-form-label">contact information</Label>
        <div className="space-y-4 mt-3">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-2">
              <Mail className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input
              type="email"
              placeholder="Email address"
              className="project-form-input"
              value={contactInfo.email}
              onChange={(e) => handleContactInfoChange("email", e.target.value)}
            />
          </div>

          <div className="flex items-center">
            <div className="flex-shrink-0 mr-2">
              <Linkedin className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input
              type="url"
              placeholder="LinkedIn profile URL"
              className="project-form-input"
              value={contactInfo.linkedin}
              onChange={(e) =>
                handleContactInfoChange("linkedin", e.target.value)
              }
            />
          </div>

          <div className="flex items-center">
            <div className="flex-shrink-0 mr-2">
              <Twitter className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input
              type="url"
              placeholder="X (Twitter) profile URL"
              className="project-form-input"
              value={contactInfo.twitter}
              onChange={(e) =>
                handleContactInfoChange("twitter", e.target.value)
              }
            />
          </div>

          <div className="flex items-center   gap-2">
            <div className="flex-shrink-0 mt-2">
              <Github className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input
              type="url"
              placeholder="GitHub profile URL"
              className="project-form-input"
              value={contactInfo.github}
              onChange={(e) =>
                handleContactInfoChange("github", e.target.value)
              }
            />
          </div>
        </div>
        {errors.contactInfo && (
          <p className="project-form-error">{errors.contactInfo[0]}</p>
        )}
      </div>

      <MDEditor
        id="details"
        preview="edit"
        height={300}
        value={details}
        onChange={(value) => setDetails(value as string)}
        className="startup-form-editor"
        textareaProps={{
          placeholder: "Details of your Project",
        }}
        previewOptions={{
          disallowedElements: ["style"],
        }}
      />

      <Button type="submit" className="project-form-button">
        {isPending ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
