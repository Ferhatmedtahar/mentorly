import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ReadySection() {
  return (
    <section className="py-16 md:py-20 pink-container text-center text-white  ">
      <div className="max-container padding-container">
        <h2 className="text-36-bold !text-white !dark:text-white mb-4  ">
          Ready to Start Your Journey?{" "}
        </h2>
        <p className="text-xl text-white/80 dark:text-white/90 mb-8 max-w-2xl mx-auto">
          Join our community of innovators, mentors, and collaborators to turn
          your vision into reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-primary-600 hover:bg-primary-700 text-white"
            size="lg"
            asChild
          >
            <Link href="/projects/create-project">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-transparent hover:text-white "
            size="lg"
            asChild
          >
            <Link href="/projects">Browse Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
