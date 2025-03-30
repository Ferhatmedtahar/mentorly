
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Users } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Skills options
const skillOptions = [
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

// Collaboration types
const collaborationTypes = [
  "Looking for Mentor",
  "Seeking Collaborators",
  "Active Collaboration"
];

// Timeline options
const timelineOptions = [
  "Less than 1 month",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "More than 12 months"
];

// Team size options
const teamSizeOptions = [
  "Solo (just me)",
  "2-3 people",
  "4-5 people",
  "6-10 people",
  "10+ people"
];

const CreateProject = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    longDescription: '',
    collaborationType: '',
    timeline: '',
    teamSize: '',
    skills: [] as string[]
  });
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    longDescription: '',
    collaborationType: '',
    timeline: '',
    teamSize: '',
    skills: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const toggleSkill = (skill: string) => {
    const updatedSkills = formData.skills.includes(skill)
      ? formData.skills.filter(s => s !== skill)
      : [...formData.skills, skill];
    
    setFormData({ ...formData, skills: updatedSkills });
    setErrors({ ...errors, skills: '' });
  };

  const selectCollaborationType = (type: string) => {
    setFormData({ ...formData, collaborationType: type });
    setErrors({ ...errors, collaborationType: '' });
  };

  const selectTimeline = (timeline: string) => {
    setFormData({ ...formData, timeline: timeline });
    setErrors({ ...errors, timeline: '' });
  };

  const selectTeamSize = (teamSize: string) => {
    setFormData({ ...formData, teamSize: teamSize });
    setErrors({ ...errors, teamSize: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Short description is required';
      isValid = false;
    }

    if (!formData.longDescription.trim()) {
      newErrors.longDescription = 'Detailed description is required';
      isValid = false;
    }

    if (!formData.collaborationType) {
      newErrors.collaborationType = 'Please select a collaboration type';
      isValid = false;
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Please select a timeline';
      isValid = false;
    }

    if (!formData.teamSize) {
      newErrors.teamSize = 'Please select a team size';
      isValid = false;
    }

    if (formData.skills.length === 0) {
      newErrors.skills = 'Please select at least one skill';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would send the data to an API
      console.log('Submitted project:', formData);
      
      // Show success toast
      toast({
        title: "Project created successfully!",
        description: "Your project has been posted.",
      });
      
      // Redirect to projects page after a short delay
      setTimeout(() => {
        navigate('/projects');
      }, 1500);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Create a New Project</h1>
        
        <form onSubmit={handleSubmit} className="startup-form">
          {/* Project Title */}
          <div>
            <label htmlFor="title" className="startup-form-label">Project Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Give your project a compelling title"
              className="startup-form-input w-full"
            />
            {errors.title && <p className="startup-form-error">{errors.title}</p>}
          </div>
          
          {/* Short Description */}
          <div>
            <label htmlFor="description" className="startup-form-label">Short Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a brief summary of your project (max 200 characters)"
              className="startup-form-textarea w-full h-20"
              maxLength={200}
            />
            {errors.description && <p className="startup-form-error">{errors.description}</p>}
          </div>
          
          {/* Detailed Description */}
          <div>
            <label htmlFor="longDescription" className="startup-form-label">Detailed Description</label>
            <textarea
              id="longDescription"
              name="longDescription"
              value={formData.longDescription}
              onChange={handleChange}
              placeholder="Explain your project in detail, including goals, challenges, and what you're looking for"
              className="startup-form-textarea w-full h-40"
            />
            {errors.longDescription && <p className="startup-form-error">{errors.longDescription}</p>}
          </div>
          
          {/* Collaboration Type */}
          <div>
            <label className="startup-form-label">Collaboration Type</label>
            <div className="flex flex-wrap gap-3 mt-3">
              {collaborationTypes.map((type) => (
                <Button
                  key={type}
                  type="button"
                  variant={formData.collaborationType === type ? "default" : "outline"}
                  className={formData.collaborationType === type ? "bg-primary text-white" : "border-black border-[2px]"}
                  onClick={() => selectCollaborationType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
            {errors.collaborationType && <p className="startup-form-error">{errors.collaborationType}</p>}
          </div>
          
          {/* Timeline */}
          <div>
            <label className="startup-form-label">Project Timeline</label>
            <div className="flex flex-wrap gap-3 mt-3">
              {timelineOptions.map((option) => (
                <Button
                  key={option}
                  type="button"
                  variant={formData.timeline === option ? "default" : "outline"}
                  className={formData.timeline === option ? "bg-primary text-white" : "border-black border-[2px]"}
                  onClick={() => selectTimeline(option)}
                >
                  <Clock className="h-4 w-4 mr-2" />
                  {option}
                </Button>
              ))}
            </div>
            {errors.timeline && <p className="startup-form-error">{errors.timeline}</p>}
          </div>
          
          {/* Team Size */}
          <div>
            <label className="startup-form-label">Team Size</label>
            <div className="flex flex-wrap gap-3 mt-3">
              {teamSizeOptions.map((option) => (
                <Button
                  key={option}
                  type="button"
                  variant={formData.teamSize === option ? "default" : "outline"}
                  className={formData.teamSize === option ? "bg-primary text-white" : "border-black border-[2px]"}
                  onClick={() => selectTeamSize(option)}
                >
                  <Users className="h-4 w-4 mr-2" />
                  {option}
                </Button>
              ))}
            </div>
            {errors.teamSize && <p className="startup-form-error">{errors.teamSize}</p>}
          </div>
          
          {/* Skills */}
          <div>
            <label className="startup-form-label">Required Skills</label>
            <div className="flex flex-wrap gap-2 mt-3">
              {skillOptions.map((skill) => (
                <Badge
                  key={skill}
                  variant={formData.skills.includes(skill) ? "default" : "secondary"}
                  className={`cursor-pointer ${formData.skills.includes(skill) ? "bg-primary" : "category-tag"}`}
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                </Badge>
              ))}
            </div>
            {errors.skills && <p className="startup-form-error">{errors.skills}</p>}
          </div>
          
          {/* Project Preview */}
          <div>
            <h3 className="startup-form-label mb-4">Project Preview</h3>
            <Card className="border-[3px] border-black rounded-[22px] shadow-100">
              <CardContent className="p-6">
                <h2 className="text-26-semibold mb-2">
                  {formData.title || "Project Title"}
                </h2>
                <p className="text-16-medium text-black-100 mb-4">
                  {formData.description || "Short description will appear here..."}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {formData.skills.slice(0, 5).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="category-tag">
                      {skill}
                    </Badge>
                  ))}
                  {formData.skills.length > 5 && (
                    <Badge variant="secondary" className="category-tag">
                      +{formData.skills.length - 5} more
                    </Badge>
                  )}
                </div>
                
                {(formData.collaborationType || formData.timeline || formData.teamSize) && (
                  <div className="flex flex-wrap gap-4 text-sm text-black-300">
                    {formData.collaborationType && (
                      <div className="flex items-center gap-1">
                        <Badge variant="default" className="bg-primary text-white">
                          {formData.collaborationType}
                        </Badge>
                      </div>
                    )}
                    {formData.timeline && (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formData.timeline}</span>
                      </div>
                    )}
                    {formData.teamSize && (
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{formData.teamSize}</span>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Submit Button */}
          <Button type="submit" className="startup-form-btn mt-8">
            Publish Project
          </Button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateProject;
