import { JSX } from "react";
import GuideCard from "../general/GuideCard";

export default function HowItWorks({
  guideCards,
}: {
  readonly guideCards: {
    id: number;
    heading: string;
    desc: string;
    icon: JSX.Element;
  }[];
}) {
  return (
    <section className="py-12 md:py-16 max-container padding-container ">
      <h2 className="text-30-bold text-center mb-10">How It Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {guideCards.map((card) => (
          <GuideCard
            key={`guide-card-${card.id}`}
            heading={card.heading}
            desc={card.desc}
            icon={card.icon}
          />
        ))}
      </div>
    </section>
  );
}
