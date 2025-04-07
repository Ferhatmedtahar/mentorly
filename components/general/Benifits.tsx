import { StarIcon, Clock, Users, CircleDollarSign } from "lucide-react"; // adjust path if needed
import BenefitCard from "./BenefitCard";

const benifits = [
  {
    icon: StarIcon,
    title: "Quality Connections",
    description:
      "Our platform focuses on meaningful connections rather than quantity, helping you find the right match for your project needs.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description:
      "No more searching through multiple platforms or networks to find the right collaborators or mentors.",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Join a community of like-minded creators and mentors who are passionate about building and learning together.",
  },
  {
    icon: CircleDollarSign,
    title: "Free to Use",
    description:
      "Our core platform is completely free to use, making it accessible to creators at any stage of their journey.",
  },
];

export default function BenefitList() {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {benifits.map((benifit, index) => (
        <BenefitCard key={`${benifit.title}-${index}`} {...benifit} />
      ))}
    </div>
  );
}
