"use client";

import { loginWithGithub, logoutUser } from "@/actions/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { GithubIcon, LogOut, PlusCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "../ui/ModeToggle";

const Navbar = ({ user }: { user: any }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav
      className={`bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 border-b border-border/40 transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="max-container padding-container flex items-center justify-between gap-10 py-3 px-4">
        <ul className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <li className="text-xl font-bold gradient">{"<Mentorly>"}</li>
          </Link>

          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <li className="transition-colors hover:text-primary">
              <Link href="/projects?sort=created_at&order=desc&page=1">
                Explore
              </Link>
            </li>

            <li className="transition-colors hover:text-primary">
              <Link href="/about">About</Link>
            </li>
          </div>
        </ul>
        <div className="hidden md:flex items-center gap-4">
          {session?.user ? (
            <>
              <Button
                variant="default"
                size="sm"
                className=" text-primary-800 bg-primary-200 dark:bg-primary-100 hover:bg-primary-300/90 dark:hover:bg-primary-200 cursor-pointer border border-primary-300 dark:border-primary-400 focus:outline-none focus:ring focus:ring-primary-200"
                asChild
              >
                <Link href="/projects/create-project">
                  <PlusCircle className="h-4 w-4 mr-1" />
                  <span className="max-sm:hidden">Create Project</span>
                </Link>
              </Button>
              <form action={logoutUser}>
                <Button
                  variant="ghost"
                  size="icon"
                  // className="rounded-full p-1  bg-primary hover:bg-primary-700 cursor-pointer border border-primary-300 dark:border-primary-400 focus:outline-none focus:ring focus:ring-primary-200 "
                  className=" rounded-full p-1 bg-primary-200 dark:bg-primary-100 hover:bg-primary-200 dark:hover:bg-primary-200 cursor-pointer border border-primary-300 dark:border-primary-400 focus:outline-none focus:ring focus:ring-primary-200 "
                  type="submit"
                >
                  <LogOut className="h-5 w-5  text-primary-800" />
                  <span className="sr-only">Logout</span>
                </Button>
              </form>

              <Link href={`/users/${user.id}`}>
                <Avatar className="h-9 w-9">
                  <AvatarImage
                    src={session.user.image ?? ""}
                    alt={session.user.name ?? ""}
                  />
                  <AvatarFallback>
                    {session.user.name?.charAt(0) ?? "U"}
                  </AvatarFallback>
                </Avatar>
              </Link>

              <ModeToggle />
            </>
          ) : (
            <>
              <form action={loginWithGithub}>
                <Button
                  type="submit"
                  className="login inline-flex items-center gap-2 cursor-pointer border border-primary dark:border-primary-700 bg-primary-200 hover:bg-white dark:bg-primary-100 dark:hover:bg-primary-50 text-primary-800 dark:text-primary-800 transition-colors duration-200 ease-in-out"
                >
                  <GithubIcon className="h-5 w-5" />
                  <span>Login</span>
                </Button>
              </form>
              <ModeToggle />
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="text-foreground p-2 md:hidden relative z-50  dark:text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <span
              className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                isMenuOpen ? "text-black rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-current transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? "text-black opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                isMenuOpen ? "text-black -rotate-45" : "translate-y-2"
              }`}
            />
          </div>
        </button>

        {/* Mobile menu with animation */}
        {mounted && (
          <div
            className={`absolute -top-4 left-0 right-0 dark:bg-primary-100 bg-white/95 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="flex flex-col justify-center h-full px-6 shadow-xl border-b border-primary">
              <ul className="flex flex-col space-y-6 pt-16 pb-6 items-center dark:text-black">
                <li className="py-2 transition-colors hover:text-primary">
                  <Link
                    href="/projects?sort=created_at&order=desc&page=1"
                    onClick={toggleMenu}
                  >
                    Explore
                  </Link>
                </li>
                {/* <li className="py-2 transition-colors hover:text-primary">
                  <Link href="/mentors" onClick={toggleMenu}>
                    Mentors
                  </Link>
                </li> */}
                <li className="py-2 transition-colors hover:text-primary">
                  <Link href="/about" onClick={toggleMenu}>
                    About
                  </Link>
                </li>

                {session?.user ? (
                  <>
                    <li className="py-2">
                      <Button
                        variant="default"
                        className="bg-primary hover:bg-primary/90 gap-1 items-center w-full"
                        asChild
                        onClick={toggleMenu}
                      >
                        <Link href="/projects/create-project">
                          <PlusCircle className="h-4 w-4 mr-1" />
                          Create Project
                        </Link>
                      </Button>
                    </li>
                    <li className="py-2">
                      <form action={logoutUser} onSubmit={toggleMenu}>
                        <Button
                          variant="ghost"
                          className="w-full border border-primary"
                          type="submit"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Logout
                        </Button>
                      </form>
                    </li>
                    <li className="py-2 flex items-center gap-4">
                      <Link
                        href={`/users/${session.user.id}`}
                        onClick={toggleMenu}
                      >
                        <Avatar className="h-9 w-9">
                          <AvatarImage
                            src={session.user.image ?? ""}
                            alt={session.user.name ?? ""}
                          />
                          <AvatarFallback>
                            {session.user.name?.charAt(0) ?? "U"}
                          </AvatarFallback>
                        </Avatar>
                      </Link>
                      <ModeToggle />
                    </li>
                  </>
                ) : (
                  <li className="py-2 flex flex-col gap-4 w-full">
                    <form action={loginWithGithub} onSubmit={toggleMenu}>
                      <Button
                        type="submit"
                        className="inline-flex items-center gap-2 w-full"
                      >
                        <GithubIcon className="h-5 w-5" />
                        <span>Login with GitHub</span>
                      </Button>
                    </form>
                    <div className="flex justify-center">
                      <ModeToggle />
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
