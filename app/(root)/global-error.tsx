"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-primary-50 to-white dark:from-primary-950 dark:to-black">
      <div className="max-w-2xl w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-red-100 dark:bg-red-900/20">
            <AlertTriangle
              size={64}
              className="text-red-500 dark:text-red-400"
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4 text-primary-800 dark:text-primary-200">
          Something went wrong
        </h1>

        <div className="mb-8 p-6 bg-white dark:bg-black border border-primary-200 dark:border-primary-800 rounded-lg shadow-lg">
          <p className="text-slate-700 dark:text-slate-300 mb-4 text-lg">
            We encountered a critical error.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
            {error.message || "Unknown error occurred"}
          </p>
          {error.digest && (
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            aria-label="Refresh the page"
            onClick={() => reset()}
            className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 px-6 py-2"
          >
            <RefreshCw size={18} />
            Refresh the page
          </Button>

          <Link href="/">
            <Button
              aria-label="Return to home"
              variant="outline"
              className="border-2 border-primary-300 dark:border-primary-700 text-primary-800 dark:text-primary-200 hover:bg-primary-50 dark:hover:bg-primary-900/30 flex items-center gap-2 px-6 py-2"
            >
              <Home size={18} />
              Return to home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
