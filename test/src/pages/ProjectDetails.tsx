
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, MessageCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Mock project data - would be fetched from an API in a real application
const mockProjects = {
  "ai-legal-document-analysis": {
    id: "1",
    title: "AI-Driven Legal Document Analysis Tool",
    description: "Building an AI tool that analyzes legal documents and provides summaries and insights. The system will use natural language processing to extract key information from contracts, legal briefs, and other documents to help legal professionals save time and improve accuracy.",
    longDescription: "Our project aims to revolutionize the legal industry by creating an AI-powered tool that can quickly analyze and extract key information from complex legal documents. The system will use advanced natural language processing techniques to identify important clauses, potential risks, and provide summaries that help legal professionals make faster, more informed decisions. We're looking for machine learning engineers with experience in NLP and legal experts who can help us understand the specific needs and challenges of the industry.",
    author: {
      name: "Sarah Smith",
      username: "sarahsmith",
      avatar: "",
      title: "Legal Tech Specialist",
      bio: "Former attorney with 5+ years of experience in legal tech innovations."
    },
    skills: ["Machine Learning", "Legal", "Python", "NLP", "Data Science", "API Development"],
    collaborationType: "Looking for Mentor",
    createdAt: "2023-09-15",
    slug: "ai-legal-document-analysis",
    timeline: "3-6 months",
    teamSize: "2-3 people"
  }
};

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = mockProjects[slug as keyof typeof mockProjects];

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="container py-16 text-center">
          <h2 className="text-30-bold">Project not found</h2>
          <p className="mt-4 text-16-medium text-black-100">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container py-10">
        <div className="max-w-4xl mx-auto">
          {/* Project Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="category-tag">
                {project.collaborationType}
              </Badge>
              <span className="text-14-normal text-black-100">
                Posted on {project.createdAt}
              </span>
            </div>
            
            <h1 className="heading">
              {project.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <Link to={`/profile/${project.author.username}`} className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-black">
                  <AvatarFallback className="bg-primary text-white font-bold">
                    {project.author.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-16-medium">{project.author.name}</p>
                  <p className="text-14-normal text-black-300">{project.author.title}</p>
                </div>
              </Link>
              
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-black-300" />
                <span className="text-16-medium text-black-100">Timeline: {project.timeline}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-black-300" />
                <span className="text-16-medium text-black-100">Team Size: {project.teamSize}</span>
              </div>
            </div>
          </div>
          
          {/* Project Description */}
          <Card className="mb-8 border-[3px] border-black rounded-[22px] shadow-100">
            <CardContent className="p-6">
              <h2 className="text-24-black mb-4">Project Description</h2>
              <p className="text-16-medium text-black-100 whitespace-pre-line">
                {project.longDescription}
              </p>
            </CardContent>
          </Card>
          
          {/* Skills Required */}
          <Card className="mb-8 border-[3px] border-black rounded-[22px] shadow-100">
            <CardContent className="p-6">
              <h2 className="text-24-black mb-4">Skills Required</h2>
              <div className="flex flex-wrap gap-3">
                {project.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="category-tag">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button className="startup-form-btn">
              Apply to Collaborate
            </Button>
            <Button variant="outline" className="border-[4px] border-black hover:bg-primary-100 text-black rounded-full p-5 min-h-[70px] font-bold text-[18px]">
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Sarah
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;
