
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Search, MapPin, ExternalLink } from 'lucide-react';

// Mock mentor data
const mockMentors = [
  {
    id: "1",
    name: "Sarah Smith",
    username: "sarahsmith",
    avatar: "",
    bio: "Former attorney with 5+ years of experience in legal tech innovations. Passionate about helping startups navigate legal challenges.",
    title: "Legal Tech Specialist",
    location: "San Francisco, CA",
    skills: ["Legal", "Machine Learning", "Product Management", "Strategy", "NLP"],
    available: true
  },
  {
    id: "2",
    name: "Michael Chen",
    username: "michaelchen",
    avatar: "",
    bio: "Senior software engineer with 10+ years experience in full-stack development. Specializes in scaling applications and mentoring junior developers.",
    title: "Senior Software Engineer",
    location: "New York, NY",
    skills: ["React", "Node.js", "Python", "System Architecture", "DevOps"],
    available: true
  },
  {
    id: "3",
    name: "Jessica Williams",
    username: "jessicawilliams",
    avatar: "",
    bio: "UX/UI designer with a background in psychology. Passionate about creating intuitive, accessible, and delightful user experiences.",
    title: "UX/UI Designer",
    location: "Austin, TX",
    skills: ["UI/UX", "User Research", "Figma", "Design Systems", "Accessibility"],
    available: true
  },
  {
    id: "4",
    name: "David Rodriguez",
    username: "davidrodriguez",
    avatar: "",
    bio: "Marketing strategist with experience launching products from zero to millions of users. Expert in growth hacking and digital marketing.",
    title: "Growth Marketing Specialist",
    location: "Los Angeles, CA",
    skills: ["Digital Marketing", "Growth Strategy", "SEO", "Content Marketing", "Analytics"],
    available: false
  },
  {
    id: "5",
    name: "Priya Patel",
    username: "priyapatel",
    avatar: "",
    bio: "Blockchain developer and educator with a passion for Web3 technologies. Helps startups navigate the decentralized web and implement blockchain solutions.",
    title: "Blockchain Developer",
    location: "Miami, FL",
    skills: ["Blockchain", "Solidity", "Smart Contracts", "Web3", "DeFi"],
    available: true
  },
  {
    id: "6",
    name: "James Wilson",
    username: "jameswilson",
    avatar: "",
    bio: "Machine learning engineer specializing in computer vision and NLP. Former research scientist with a PhD in AI, now helping startups implement AI solutions.",
    title: "Machine Learning Engineer",
    location: "Seattle, WA",
    skills: ["Machine Learning", "Python", "Computer Vision", "NLP", "Data Science"],
    available: true
  }
];

// List of all unique skills across mentors
const allSkills = [...new Set(mockMentors.flatMap(mentor => mentor.skills))].sort();

const Mentors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [availableOnly, setAvailableOnly] = useState(false);

  // Filter mentors based on search, skills, and availability
  const filteredMentors = mockMentors.filter(mentor => {
    const matchesSearch = 
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      mentor.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSkills = selectedSkills.length === 0 || 
      selectedSkills.some(skill => mentor.skills.includes(skill));
    
    const matchesAvailability = !availableOnly || mentor.available;
    
    return matchesSearch && matchesSkills && matchesAvailability;
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
        <h1 className="text-3xl font-bold mb-8">Find a Mentor</h1>
        
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search mentors by name, title, or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-[3px] border-black rounded-full focus:outline-none"
              />
            </div>
          </div>
          
          {/* Availability Filter */}
          <div className="mb-4 flex items-center">
            <Button
              variant={availableOnly ? "default" : "outline"}
              className={availableOnly ? "bg-primary text-white" : "border-black border-[2px]"}
              onClick={() => setAvailableOnly(!availableOnly)}
            >
              {availableOnly ? "✓ Available Mentors Only" : "Show All Mentors"}
            </Button>
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
        
        {/* Mentors Grid */}
        {filteredMentors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map(mentor => (
              <Card key={mentor.id} className="border-[3px] border-black rounded-[22px] shadow-100 overflow-hidden">
                <div className={`h-2 w-full ${mentor.available ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-14 w-14 border-2 border-black">
                        <AvatarFallback className="bg-primary text-white font-bold text-lg">
                          {mentor.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-20-medium">{mentor.name}</h3>
                        <p className="text-black-300">{mentor.title}</p>
                      </div>
                    </div>
                    <Badge variant={mentor.available ? "default" : "secondary"} className={mentor.available ? "bg-green-500" : ""}>
                      {mentor.available ? "Available" : "Unavailable"}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-1 text-black-300 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{mentor.location}</span>
                  </div>
                  
                  <p className="text-black-100 mb-4 line-clamp-3">
                    {mentor.bio}
                  </p>
                  
                  <div className="mb-5">
                    <div className="flex flex-wrap gap-2">
                      {mentor.skills.slice(0, 3).map(skill => (
                        <Badge key={skill} variant="secondary" className="category-tag">
                          {skill}
                        </Badge>
                      ))}
                      {mentor.skills.length > 3 && (
                        <Badge variant="secondary" className="category-tag">
                          +{mentor.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button asChild variant="outline" className="border-[2px] border-black">
                      <Link to={`/profile/${mentor.username}`}>
                        View Profile
                      </Link>
                    </Button>
                    <Button asChild variant="default" className="bg-primary">
                      <Link to={`/profile/${mentor.username}`}>
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Contact
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-2">No mentors found</h3>
            <p className="text-gray-600">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Mentors;
