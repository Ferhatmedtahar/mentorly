import {
  ArrowRight,
  BookOpenIcon,
  LightbulbIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import GuideCard from "../general/GuideCard";
import { Button } from "../ui/button";

export default function Explaination() {
  const guideCards = [
    {
      heading: "Share Your Idea",
      desc: "Create a project listing detailing your vision, goals, and the type of help you need.",
      icon: <LightbulbIcon className="h-6 w-6 " />,
    },
    {
      heading: "Connect",
      desc: "Get matched with mentors or collaborators who have the expertise you're looking for.",
      icon: <UsersIcon className="h-6 w-6 text-brand-pink" />,
    },
    {
      heading: "Learn and Grow",
      desc: "Access resources and support to help you achieve your goals.",
      icon: <BookOpenIcon className="h-6 w-6 " />,
    },
  ];
  return (
    <>
      <section className="py-12 md:py-16 max-container padding-container ">
        <h2 className="text-30-bold text-center mb-10">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guideCards.map((card, index) => (
            <GuideCard
              key={`guide-card-${index}`}
              heading={card.heading}
              desc={card.desc}
              icon={card.icon}
            />
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 pink-container text-center text-white max-container padding-container ">
        <h2 className="text-30-bold mb-4 ">Ready to Launch Your Idea?</h2>
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
            <Link href="/create-project">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-transparent hover:text-white "
            size="lg"
            asChild
          >
            <Link href="/projects">Explore Projects</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
