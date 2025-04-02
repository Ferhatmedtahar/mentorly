import ProjectCard from "@/components/general/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Mock data for featured projects
const mockProjects = [
  {
    id: "1",
    title: "AI-Driven Legal Document Analysis Tool",
    description:
      "Building an AI tool that analyzes legal documents and provides summaries and insights. Looking for ML engineers and legal experts.",
    author: {
      name: "Sarah Smith",
      username: "sarahsmith",
      avatar: "",
    },
    skills: ["Machine Learning", "Legal", "Python", "NLP"],
    collaborationType: "Looking for Mentor",
    slug: "ai-legal-document-analysis",
  },
  {
    id: "2",
    title: "Web Development Masterclass Platform",
    description:
      "Creating an interactive platform for web development masterclasses with project-based learning approach. Seeking UI/UX designers.",
    author: {
      name: "Jason Roberts",
      username: "jasonroberts",
      avatar: "",
    },
    skills: ["React", "Node.js", "UI/UX", "Education"],
    collaborationType: "Seeking Collaborators",
    slug: "web-dev-masterclass",
  },
  {
    id: "3",
    title: "Sustainable Fashion Marketplace",
    description:
      "Developing a marketplace for sustainable and ethical fashion brands. Looking for frontend developers and marketing strategists.",
    author: {
      name: "Emma Johnson",
      username: "emmajohnson",
      avatar: "",
    },
    skills: ["E-commerce", "React", "Sustainability", "Marketing"],
    collaborationType: "Looking for Mentor",
    slug: "sustainable-fashion-marketplace",
  },
  {
    id: "4",
    title: "IoT Home Energy Management System",
    description:
      "Building a system to monitor and optimize home energy usage through IoT devices. Need hardware and embedded systems experts.",
    author: {
      name: "David Chen",
      username: "davidchen",
      avatar: "",
    },
    skills: ["IoT", "Embedded Systems", "Energy", "C++"],
    collaborationType: "Seeking Collaborators",
    slug: "iot-energy-management",
  },
  {
    id: "5",
    title: "Mental Health Support Mobile App",
    description:
      "Creating a mobile app for mental health support, journaling, and connecting with therapists. Looking for mobile developers and UI/UX designers.",
    author: {
      name: "Olivia Parker",
      username: "oliviaparker",
      avatar: "",
    },
    skills: ["React Native", "Mental Health", "UI/UX", "Firebase"],
    collaborationType: "Looking for Mentor",
    slug: "mental-health-app",
  },
  {
    id: "6",
    title: "Blockchain-Based Supply Chain Tracking",
    description:
      "Developing a blockchain solution for transparent supply chain tracking. Seeking blockchain developers and supply chain experts.",
    author: {
      name: "Michael Brown",
      username: "michaelbrown",
      avatar: "",
    },
    skills: ["Blockchain", "Supply Chain", "Solidity", "Web3"],
    collaborationType: "Seeking Collaborators",
    slug: "blockchain-supply-chain",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-12 md:py-16 bg-background max-container padding-container">
      <div className="flex justify-between items-center mb-8 ">
        <h2 className="text-2xl md:text-3xl text-36-bold dark:text-white text-pink-700 ">
          Featured Projects
        </h2>
        <Button
          variant="outline"
          className="border-primary-600 text-brand-pink hover:bg-primary-500 hover:border-primary-800 hover:text-white transition-colors duration-200 ease-in-out"
          asChild
        >
          <Link href="/projects">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
