"use client";

import SearchForm from "@/components/general/SearchForm";
import { Button } from "@/components/ui/button";
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
import { ArrowUpDown, Check, ChevronsUpDown, Filter, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Group skills by category
const groupedSkills = skillsOptions.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, typeof skillsOptions>);

const sortOptions = [
  { value: "created_at", label: "Date Created" },
  { value: "views", label: "Views" },
];

export default function ProjectsFilter({
  selectedCollaborationType = "",
  selectedSkills = [],
  sortBy = "created_at",
  sortOrder = "desc",
  search = "",
}: {
  readonly selectedCollaborationType?: string;
  readonly selectedSkills?: string[];
  readonly sortBy?: string;
  readonly sortOrder?: "asc" | "desc";
  readonly search?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [collaborationType, setCollaborationType] = useState(
    selectedCollaborationType
  );
  const [skills, setSkills] = useState<string[]>(selectedSkills);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [sort, setSort] = useState(sortBy);
  const [order, setOrder] = useState<"asc" | "desc">(sortOrder);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState(search);
  // Apply filters
  const applyFilters = () => {
    const params = new URLSearchParams();

    if (collaborationType) {
      params.set("collaborationType", collaborationType);
    }

    if (skills.length > 0) {
      params.set("skills", skills.join(","));
    }

    if (sort) {
      params.set("sort", sort);
    }

    if (order) {
      params.set("order", order);
    }

    if (searchTerm) {
      params.set("query", search);
    }

    // Reset to page 1 when filters change
    params.set("page", "1");

    router.push(`${pathname}?${params.toString()}`);
  };

  // Reset filters
  const resetFilters = () => {
    setCollaborationType("");
    setSkills([]);
    setSort("created_at");
    setOrder("desc");
    setSearchTerm("");
    router.push(pathname);
  };

  // Toggle sort order
  const toggleSortOrder = () => {
    setOrder(order === "asc" ? "desc" : "asc");
  };

  // Remove a skill from selection
  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  // Apply filters when they change
  useEffect(() => {
    applyFilters();
  }, [collaborationType, skills, sort, order]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button
            aria-label="Filters"
            variant="outline"
            onClick={() => setIsFiltersVisible(!isFiltersVisible)}
            size="sm"
            className=" text-primary-800 bg-primary-100 dark:bg-primary-100  hover:bg-primary-200/90  dark:hover:bg-primary-200 cursor-pointer border border-primary-300 dark:border-primary-400 focus:outline-none focus:ring focus:ring-primary-200"
          >
            <Filter size={16} />
            Filters
          </Button>

          {(collaborationType || skills.length > 0) && (
            <Button
              aria-label="Clear filters"
              variant="ghost"
              onClick={resetFilters}
              size="sm"
              className="border border-primary-300 dark:border-primary-400 text-primary-900 dark:text-primary-50 dark:bg-background hover:bg-primary-50 dark:hover:bg-background cursor-pointer focus:outline-none focus:ring focus:ring-primary-200"
            >
              Clear filters
            </Button>
          )}
        </div>

        <SearchForm query={search} />
        <div className="flex items-center gap-2">
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-[180px] bg-primary-50 dark:bg-primary-100 border-primary text-primary-900  hover:bg-primary-200 dark:hover:bg-primary-200/90">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-primary-50 dark:bg-primary-100">
              {sortOptions.map((option) => (
                <SelectItem
                  className="text-black hover:bg-primary-200 dark:hover:bg-primary-300"
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            aria-label="Toggle sort order"
            variant="outline"
            size="icon"
            onClick={toggleSortOrder}
            className="h-10 w-10 bg-primary-50 dark:bg-primary-100 border-primary text-primary-800 hover:text-primary-950  hover:bg-primary-200 dark:hover:bg-primary-300"
          >
            <ArrowUpDown
              size={16}
              className={order === "asc" ? "rotate-180" : ""}
            />
          </Button>
        </div>
      </div>

      {isFiltersVisible && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-black dark:border-primary-500 rounded-lg bg-background ">
          <div>
            <h3 className="text-sm font-medium mb-2">Collaboration Type</h3>
            <Select
              value={collaborationType}
              onValueChange={setCollaborationType}
            >
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
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Skills</h3>
            <Popover open={skillsOpen} onOpenChange={setSkillsOpen}>
              <PopoverTrigger asChild>
                <Button
                  aria-label="Select skills"
                  variant="outline"
                  className="project-form-input w-full justify-between "
                >
                  {selectedSkills.length > 0 ? (
                    <span className="text-slate-500 dark:text-slate-100">
                      {selectedSkills.length} selected
                    </span>
                  ) : (
                    <span className="text-slate-500 dark:text-slate-500">
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
                          const isSelected = selectedSkills.includes(
                            skill.label
                          );
                          return (
                            <CommandItem
                              key={skill.value}
                              value={skill.value}
                              className="cursor-pointer "
                              onSelect={() => {
                                if (isSelected) {
                                  setSkills(
                                    selectedSkills.filter(
                                      (s) => s !== skill.label
                                    )
                                  );
                                } else {
                                  setSkills([...selectedSkills, skill.label]);
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

            {skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {skills.map((skill) => (
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
          </div>
        </div>
      )}
    </div>
  );
}
