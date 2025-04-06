import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="text-center flexCenter h-[50vh] w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin">
          <Loader2 className="h-12 w-12 text-primary" strokeWidth={3} />
        </div>
        <p className="text-lg font-medium text-primary">Loading...</p>
      </div>
    </div>
  );
}
