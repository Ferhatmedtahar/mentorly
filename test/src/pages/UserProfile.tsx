
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageCircle, Link2 } from 'lucide-react';
import ProjectCard from '@/components/ui/ProjectCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Mock user data - would be fetched from an API in a real application
const mockUsers = {
  "sarahsmith": {
    id: "1",
    name: "Sarah Smith",
    username: "sarahsmith",
    avatar: "",
    bio: "Former attorney with 5+ years of experience in legal tech innovations. Passionate about using AI and technology to improve legal processes and access to justice. Currently working on building tools that help legal professionals work more efficiently.",
    title: "Legal Tech Specialist",
    location: "San Francisco, CA",
    skills: ["Legal", "Machine Learning", "Product Management", "Strategy", "NLP"],
    website: "https://sarahsmith.dev",
    github: "sarahsmith-dev",
    linkedin: "sarahsmith",
    joinedDate: "April 2023",
    projects: [
      {
        id: "1",
        title: "AI-Driven Legal Document Analysis Tool",
        description: "Building an AI tool that analyzes legal documents and provides summaries and insights. Looking for ML engineers and legal experts.",
        skills: ["Machine Learning", "Legal", "Python", "NLP"],
        collaborationType: "Looking for Mentor",
        slug: "ai-legal-document-analysis"
      }
    ],
    collaborations: [
      {
        id: "5",
        title: "Mental Health Support Mobile App",
        description: "Creating a mobile app for mental health support, journaling, and connecting with therapists. Looking for mobile developers and UI/UX designers.",
        skills: ["React Native", "Mental Health", "UI/UX", "Firebase"],
        collaborationType: "Active Collaboration",
        slug: "mental-health-app"
      }
    ]
  }
};

const UserProfile = () => {
  const { username } = useParams<{ username: string }>();
  const user = mockUsers[username as keyof typeof mockUsers];

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="container py-16 text-center">
          <h2 className="text-30-bold">User not found</h2>
          <p className="mt-4 text-16-medium text-black-100">
            The user you're looking for doesn't exist or has been removed.
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
      <div className="profile-container">
        {/* Profile Sidebar */}
        <div className="profile-card">
          <div className="profile-title">
            <h2 className="text-20-medium text-center">{user.name}</h2>
          </div>
          
          <Avatar className="w-32 h-32 profile-image mt-6">
            <AvatarFallback className="bg-primary text-white text-[40px] font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          
          <h3 className="text-white text-20-medium mt-4">{user.title}</h3>
          <p className="text-white text-14-normal mt-2 text-center">{user.location}</p>
          
          <div className="w-full mt-6 space-y-4">
            <Button className="w-full bg-white text-black border-[3px] border-black hover:bg-white-100 py-2 font-medium">
              <MessageCircle className="mr-2 h-5 w-5" />
              Message
            </Button>
            
            <div className="flex justify-between w-full gap-2">
              {user.website && (
                <Button variant="outline" size="icon" className="rounded-full border-[3px] border-black hover:bg-white-100 flex-1">
                  <Link2 className="h-5 w-5" />
                  <span className="sr-only">Website</span>
                </Button>
              )}
              {user.github && (
                <Button variant="outline" size="icon" className="rounded-full border-[3px] border-black hover:bg-white-100 flex-1">
                  <svg viewBox="0 0 438.5 438.5" className="h-5 w-5">
                    <path d="M409.1 114.6c-19.6-33.6-46.2-60.2-79.8-79.8C295.7 15.2 259.1 5.4 219.3 5.4c-39.8 0-76.5 9.8-110.1 29.4 -33.6 19.6-60.2 46.2-79.8 79.8C9.8 148.2 0 184.9 0 224.6c0 47.8 13.9 90.7 41.8 128.9 27.9 38.2 63.9 64.6 108.1 79.2 5.1 1 8.9 0.3 11.4-2 2.5-2.3 3.7-5.1 3.7-8.6 0-0.6 0-5.7-0.1-15.4 -0.1-9.7-0.1-18.2-0.1-25.4l-6.6 1.1c-4.2 0.8-9.5 1.1-15.8 1 -6.4-0.1-13-0.8-19.8-2 -6.9-1.2-13.2-4.1-19.1-8.6 -5.9-4.5-10.1-10.3-12.6-17.6l-2.9-6.6c-1.9-4.4-4.9-9.2-9-14.6 -4.1-5.3-8.2-8.9-12.4-10.8l-2-1.4c-1.3-1-2.6-2.1-3.7-3.4 -1.1-1.3-2-2.7-2.6-4 -0.6-1.3-0.1-2.4 1.4-3.3 1.5-0.9 4.3-1.3 8.3-1.3l5.7 0.9c3.8 0.8 8.5 3 14.1 6.9 5.6 3.8 10.2 8.8 13.8 14.8 4.4 7.8 9.7 13.8 15.8 17.8 6.2 4.1 12.4 6.1 18.7 6.1 6.3 0 11.7-0.5 16.3-1.4 4.6-1 8.8-2.4 12.8-4.3 1.7-12.8 6.4-22.6 14-29.4 -10.8-1.1-20.6-2.9-29.3-5.1 -8.7-2.3-17.6-6-26.8-11.1 -9.2-5.1-16.9-11.5-23-19.1 -6.1-7.6-11.1-17.6-15-30 -3.9-12.4-5.9-26.6-5.9-42.8 0-23 7.5-42.6 22.6-58.8 -7-17.3-6.4-36.7 2-58.2 5.5-1.7 13.7-0.4 24.6 3.9 10.9 4.3 18.8 8 23.8 11 5 3 9.1 5.6 12.1 7.7 17.7-4.9 36-7.4 54.8-7.4s37.1 2.5 54.8 7.4l10.8-6.8c7.4-4.6 16.2-8.8 26.3-12.6 10.1-3.8 17.8-4.9 23.1-3.1 8.6 21.5 9.3 40.9 2.3 58.2 15 16.2 22.6 35.8 22.6 58.8 0 16.2-2 30.5-5.9 43 -3.9 12.5-8.9 22.5-15.1 30 -6.2 7.5-13.9 13.9-23.1 19 -9.2 5.1-18.2 8.9-26.8 11.1 -8.7 2.3-18.4 4-29.3 5.1 9.9 8.6 14.8 22.1 14.8 40.5v60.2c0 3.4 1.2 6.3 3.6 8.6 2.4 2.3 6.1 3 11.3 2 44.2-14.7 80.2-41.1 108.1-79.2 27.9-38.2 41.8-81.1 41.8-128.9C438.5 184.9 428.7 148.2 409.1 114.6z" />
                  </svg>
                  <span className="sr-only">GitHub</span>
                </Button>
              )}
              {user.linkedin && (
                <Button variant="outline" size="icon" className="rounded-full border-[3px] border-black hover:bg-white-100 flex-1">
                  <svg viewBox="0 0 448 448" className="h-5 w-5">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v319.7c0 17.7 14.3 32 31.9 32H416c17.7 0 32-14.3 32-32V64.3c0-17.8-14.3-32.3-32-32.3zM135.4 320H69V160h66.4v160zm-33.2-182.2c-21.3 0-38.5-17.3-38.5-38.5S80.9 60.8 102.2 60.8c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm288.9 182.2H329V232c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V320h-66.4V160h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V320z" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Button>
              )}
            </div>
          </div>
          
          <div className="w-full bg-white border-[3px] border-black rounded-[15px] p-4 mt-6">
            <h4 className="text-16-medium mb-3">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="category-tag">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="text-white text-14-normal mt-6">
            Member since {user.joinedDate}
          </div>
        </div>
        
        {/* Profile Content */}
        <div className="flex-1">
          <Card className="border-[3px] border-black rounded-[22px] shadow-100 mb-8">
            <CardContent className="p-6">
              <h2 className="text-24-black mb-4">About</h2>
              <p className="text-16-medium text-black-100 whitespace-pre-line">
                {user.bio}
              </p>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white border-[3px] border-black rounded-[15px]">
              <TabsTrigger value="projects" className="text-16-medium">
                Projects ({user.projects.length})
              </TabsTrigger>
              <TabsTrigger value="collaborations" className="text-16-medium">
                Collaborations ({user.collaborations.length})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="projects" className="mt-6">
              {user.projects.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {user.projects.map((project) => (
                    <ProjectCard 
                      key={project.id}
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      author={{
                        name: user.name,
                        username: user.username,
                        avatar: user.avatar
                      }}
                      skills={project.skills}
                      collaborationType={project.collaborationType}
                      slug={project.slug}
                    />
                  ))}
                </div>
              ) : (
                <p className="no-result">No projects created yet</p>
              )}
            </TabsContent>
            
            <TabsContent value="collaborations" className="mt-6">
              {user.collaborations.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {user.collaborations.map((project) => (
                    <ProjectCard 
                      key={project.id}
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      author={{
                        name: user.name,
                        username: user.username,
                        avatar: user.avatar
                      }}
                      skills={project.skills}
                      collaborationType={project.collaborationType}
                      slug={project.slug}
                    />
                  ))}
                </div>
              ) : (
                <p className="no-result">No collaborations yet</p>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
