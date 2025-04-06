import { Skeleton } from "@/components/ui/skeleton";

export function ProjectsLoading() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="startup-card max-w-3xl group">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex gap-2 items-center">
              <Skeleton className="h-6 w-10" />
              <Skeleton className="h-6 w-10" />
            </div>
          </div>

          <Skeleton className="h-8 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-3/4 mb-4" />

          <div className="flex flex-wrap gap-2 mb-4">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-14" />
          </div>

          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      ))}
    </>
  );
}

export default function Loading() {
  return (
    <div className="container mx-auto py-8">
      <Skeleton className="h-10 w-40 mb-8" />

      <Skeleton className="h-12 w-full mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <ProjectsLoading />
      </div>
    </div>
  );
}
