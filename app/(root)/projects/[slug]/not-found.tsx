import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-container">
      <div className="bg-primary pattern text-center !min-h-[180px] flexCenter mb-10">
        <h1 className="heading">Project Not Found</h1>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-primary-100 dark:bg-primary-900/20">
            <FileQuestion
              size={48}
              className="text-primary-600 dark:text-primary-400"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-primary-800 dark:text-primary-200">
          We couldn&apos;t find that project
        </h2>

        <div className="mb-8 p-6 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg">
          <p className="text-slate-700 dark:text-slate-300 mb-2">
            The project you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            It might have been deleted or you may have followed an incorrect
            link.
          </p>
        </div>

        <Link href="/projects?sort=created_at&order=desc&page=1">
          <Button
            aria-label="Return to Projects"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2"
          >
            Return to Projects
          </Button>
        </Link>
      </div>
    </section>
  );
}
