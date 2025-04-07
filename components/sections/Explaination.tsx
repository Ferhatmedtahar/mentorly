import { BookOpenIcon, LightbulbIcon, UsersIcon } from "lucide-react";
import GuideCard from "../general/GuideCard";
import ReadySection from "./ReadySection";
export default function Explaination() {
  const guideCards = [
    {
      id: 1,
      heading: "Share Your Idea",
      desc: "Create a project listing detailing your vision, goals, and the type of help you need.",
      icon: <LightbulbIcon className="h-6 w-6 " />,
    },
    {
      id: 2,
      heading: "Connect",
      desc: "Get matched with mentors or collaborators who have the expertise you're looking for.",
      icon: <UsersIcon className="h-6 w-6 text-brand-pink" />,
    },
    {
      id: 3,
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
              animationIndex={index}
              key={`guide-card-${card.id}`}
              heading={card.heading}
              desc={card.desc}
              icon={card.icon}
            />
          ))}
        </div>
      </section>

      <ReadySection />
    </>
  );
}
