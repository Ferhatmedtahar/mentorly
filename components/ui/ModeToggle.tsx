"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className=" rounded-full p-1 bg-primary-200 dark:bg-primary-100 hover:bg-primary-200 dark:hover:bg-primary-200 cursor-pointer border border-primary-300 dark:border-primary-400 focus:outline-none focus:ring focus:ring-primary-200 "
      >
        <Button aria-label="Toggle theme" variant="outline" size="icon">
          <Sun className="h-[1.3rem] w-[1.3rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0  text-primary-900 " />
          <Moon className="absolute h-[1.3rem] w-[1.3rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary-800 " />
          {/* <span className="sr-only">Toggle theme</span> */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-primary-50 dark:bg-primary-100 "
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="hover:bg-primary-200 dark:hover:bg-primary-300 duration-100 transition-colors"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="hover:bg-primary-200 dark:hover:bg-primary-300 duration-100 transition-colors"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="hover:bg-primary-200 dark:hover:bg-primary-300 duration-100 transition-colors"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
