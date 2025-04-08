"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function ProjectsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="section-container  flexCenter  flex-col gap-4 ">
      {/* <div className="bg-primary pattern text-center !min-h-[230px] flexCenter mb-10"> */}
      {/* <h1 className="heading">Error</h1> */}
      {/* </div> */}

      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-red-100 dark:bg-red-900/20">
            <AlertTriangle
              size={48}
              className="text-red-500 dark:text-red-400"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-primary-800 dark:text-primary-200">
          Something went wrong
        </h2>

        <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg">
          <p className="text-slate-700 dark:text-slate-300 mb-2">
            We encountered an error while trying to load the projects.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
            {error.message || "Unknown error occurred"}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            aria-label="try again"
            onClick={() => reset()}
            className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
          >
            <RefreshCw size={16} />
            Try again
          </Button>

          <Link href="/">
            <Button
              aria-label="return to home"
              variant="outline"
              className="border border-primary-300 dark:border-primary-700 text-primary-800 dark:text-primary-200 hover:bg-primary-50 dark:hover:bg-primary-900/30 flex items-center gap-2"
            >
              <Home size={16} />
              Return to home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
