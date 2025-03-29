
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectCard from '@/components/ui/ProjectCard';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock data for projects
const mockProjects = [
  {
    id: "1",
    title: "AI-Driven Legal Document Analysis Tool",
    description: "Building an AI tool that analyzes legal documents and provides summaries and insights. Looking for ML engineers and legal experts.",
    author: {
      name: "Sarah Smith",
      username: "sarahsmith",
      avatar: ""
    },
    skills: ["Machine Learning", "Legal", "Python", "NLP"],
    collaborationType: "Looking for Mentor",
    slug: "ai-legal-document-analysis"
  },
  {
    id: "2",
    title: "Web Development Masterclass Platform",
    description: "Creating an interactive platform for web development masterclasses with project-based learning approach. Seeking UI/UX designers.",
    author: {
      name: "Jason Roberts",
      username: "jasonroberts",
      avatar: ""
    },
    skills: ["React", "Node.js", "UI/UX", "Education"],
    collaborationType: "Seeking Collaborators",
    slug: "web-dev-masterclass"
  },
  {
    id: "3",
    title: "Sustainable Fashion Marketplace",
    description: "Developing a marketplace for sustainable and ethical fashion brands. Looking for frontend developers and marketing strategists.",
    author: {
      name: "Emma Johnson",
      username: "emmajohnson",
      avatar: ""
    },
    skills: ["E-commerce", "React", "Sustainability", "Marketing"],
    collaborationType: "Looking for Mentor",
    slug: "sustainable-fashion-marketplace"
  },
  {
    id: "4",
    title: "IoT Home Energy Management System",
    description: "Building a system to monitor and optimize home energy usage through IoT devices. Need hardware and embedded systems experts.",
    author: {
      name: "David Chen",
      username: "davidchen",
      avatar: ""
    },
    skills: ["IoT", "Embedded Systems", "Energy", "C++"],
    collaborationType: "Seeking Collaborators",
    slug: "iot-energy-management"
  },
  {
    id: "5",
    title: "Mental Health Support Mobile App",
    description: "Creating a mobile app for mental health support, journaling, and connecting with therapists. Looking for mobile developers and UI/UX designers.",
    author: {
      name: "Olivia Parker",
      username: "oliviaparker",
      avatar: ""
    },
    skills: ["React Native", "Mental Health", "UI/UX", "Firebase"],
    collaborationType: "Looking for Mentor",
    slug: "mental-health-app"
  },
  {
    id: "6",
    title: "Blockchain-Based Supply Chain Tracking",
    description: "Developing a blockchain solution for transparent supply chain tracking. Seeking blockchain developers and supply chain experts.",
    author: {
      name: "Michael Brown",
      username: "michaelbrown",
      avatar: ""
    },
    skills: ["Blockchain", "Supply Chain", "Solidity", "Web3"],
    collaborationType: "Seeking Collaborators",
    slug: "blockchain-supply-chain"
  }
];

// Collaboration type filter options
const collaborationTypes = [
  "All",
  "Looking for Mentor",
  "Seeking Collaborators",
  "Active Collaboration"
];

// Skills for filter
const allSkills = [
  "Machine Learning",
  "Legal",
  "Python",
  "NLP",
  "React",
  "Node.js",
  "UI/UX",
  "Education",
  "E-commerce",
  "Sustainability",
  "Marketing",
  "IoT",
  "Embedded Systems",
  "Energy",
  "C++",
  "React Native",
  "Mental Health",
  "Firebase",
  "Blockchain",
  "Supply Chain",
  "Solidity",
  "Web3"
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCollabType, setSelectedCollabType] = useState("All");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Filter projects based on search term, collaboration type, and skills
  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCollabType = selectedCollabType === "All" || 
                              project.collaborationType === selectedCollabType;
    
    const matchesSkills = selectedSkills.length === 0 || 
                          selectedSkills.some(skill => project.skills.includes(skill));
    
    return matchesSearch && matchesCollabType && matchesSkills;
  });

  // Toggle skill selection
  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-8">Explore Projects</h1>
        
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-[3px] border-black rounded-full focus:outline-none"
              />
            </div>
          </div>
          
          {/* Collaboration Type Filter */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Filter by Collaboration Type</h3>
            <div className="flex flex-wrap gap-2">
              {collaborationTypes.map(type => (
                <Button
                  key={type}
                  variant={selectedCollabType === type ? "default" : "outline"}
                  className={selectedCollabType === type ? "bg-primary text-white" : "border-black border-[2px]"}
                  onClick={() => setSelectedCollabType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Skills Filter */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Filter by Skills</h3>
            <div className="flex flex-wrap gap-2">
              {allSkills.map(skill => (
                <Badge
                  key={skill}
                  variant={selectedSkills.includes(skill) ? "default" : "secondary"}
                  className={`cursor-pointer ${selectedSkills.includes(skill) ? "bg-primary" : "category-tag"}`}
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your search or filters to find more projects.</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Projects;
