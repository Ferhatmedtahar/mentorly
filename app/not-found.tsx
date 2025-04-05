import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function notFound() {
  return (
    <div className=" flex flex-col text-center  items-center justify-center gap-6  my-5  ">
      <h1 className="text-2xl md:text-5xl sm:text-4xl font-semibold">
        Page not found
      </h1>
      <Button
        size={"lg"}
        className="bg-primary hover:bg-primary/90 md:flex gap-1 items-center"
      >
        <Link href={"/"}>Back to Home</Link>
      </Button>
    </div>
  );
}
