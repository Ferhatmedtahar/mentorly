import { Button } from "@/components/ui/button";
import { PlusCircle, User } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../ui/ModeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">
              {"<Mentorly>"}
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/projects"
              className="transition-colors hover:text-primary"
            >
              Explore
            </Link>
            <Link
              href="/mentors"
              className="transition-colors hover:text-primary"
            >
              Mentors
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-primary"
            >
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="default"
            className="bg-primary hover:bg-primary/90 hidden md:flex gap-1 items-center"
            asChild
          >
            <Link href="/create-project">
              <PlusCircle className="h-4 w-4 mr-1" />
              Create Project
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <Link href="/profile">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
