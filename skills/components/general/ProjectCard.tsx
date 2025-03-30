import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar?: string;
    username: string;
  };
  skills: string[];
  collaborationType: string;
  slug: string;
  className?: string;
}

const ProjectCard = ({
  id,
  title,
  description,
  author,
  skills,
  collaborationType,
  slug,
  className,
}: ProjectCardProps) => {
  console.log(id);
  return (
    <div className={cn("startup-card group", className)}>
      <div className="flex justify-between items-start mb-3">
        <Link
          href={`/profile/${author.username}`}
          className="flex items-center gap-2"
        >
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary text-white">
              {author.name[0]}
            </AvatarFallback>
          </Avatar>
          <span className="text-16-medium">{author.name}</span>
        </Link>
        <button className="text-muted-foreground hover:text-primary transition-colors">
          <Heart size={18} />
        </button>
      </div>

      <Link href={`/projects/${slug}`} className="block group">
        <h3 className="text-26-semibold group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="startup-card-desc">{description}</p>
      </Link>

      <div className="flex flex-wrap gap-2 mb-4">
        {skills.slice(0, 3).map((skill) => (
          <Badge key={skill} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
        {skills.length > 3 && (
          <Badge variant="secondary" className="text-xs">
            +{skills.length - 3} more
          </Badge>
        )}
      </div>

      <div className="flex justify-between items-center">
        <Badge variant="default" className="text-xs bg-primary text-white">
          {collaborationType}
        </Badge>
        <Link
          href={`/projects/${slug}`}
          className="text-xs font-medium text-primary hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
