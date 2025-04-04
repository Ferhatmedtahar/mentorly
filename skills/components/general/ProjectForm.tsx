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
import { collaborationTypes } from "@/data/CollaborationTypes";
import { skillsOptions } from "@/data/Skills";
import { cn } from "@/lib/utils";
import { projectSchema } from "@/lib/validation";
import MDEditor from "@uiw/react-md-editor";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import ContactInputGroup from "./ContactInfo";

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

      console.log("Form Values", fromValues);
      // validation check using zod function and the validation from the lib folder

      await projectSchema.parseAsync(fromValues);

      // Add the fields to the formData
      formData.append("collaborationType", collaborationType);
      formData.append("skills", JSON.stringify(selectedSkills));
      formData.append("contactInfo", JSON.stringify(contactInfo));
      formData.append("details", details);

      const result = await createProject(prevState, formData);

      console.log("Result", result);
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
        <Label className="project-form-label">details</Label>
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
        {errors.details && (
          <p className="project-form-error">{errors.details[0]}</p>
        )}
      </div>

      <Button type="submit" className="project-form-button">
        {isPending ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
