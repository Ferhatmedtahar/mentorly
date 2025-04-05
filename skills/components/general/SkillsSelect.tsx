"use client";
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
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { skillsOptions } from "@/data/Skills";

export default function SkillsSelect({
  selectedSkills,
}: {
  selectedSkills: string[];
}) {
  const [skillsOpen, setSkillsOpen] = useState(false);
  // Group skills by category
  const groupedSkills = skillsOptions.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skillsOptions>);

  return (
    <Popover open={skillsOpen} onOpenChange={setSkillsOpen}>
      <PopoverTrigger asChild>
        <Button
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
                  const isSelected = selectedSkills.includes(skill.label);
                  return (
                    <CommandItem
                      key={skill.value}
                      value={skill.value}
                      className="cursor-pointer "
                      onSelect={() => {
                        if (isSelected) {
                          setSkills(
                            selectedSkills.filter((s) => s !== skill.label)
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
  );
}
