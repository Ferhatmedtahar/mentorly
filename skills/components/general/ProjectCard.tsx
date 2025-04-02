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
        <button className="text-muted-foreground hover:text-primary transition-colors  cursor-pointer">
          <Heart size={18} />
        </button>
      </div>

      <Link href={`/projects/${slug}`} className="block group">
        <h3 className="text-26-semibold text-primary-700 dark:text-white transition-colors line-clamp-2">
          {title}
        </h3>
      </Link>
      <p className="startup-card-desc my-2">{description}</p>

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
        <Badge
          variant="default"
          className="text-xs bg-primary text-white cursor-default"
        >
          {collaborationType}
        </Badge>
        <Link
          href={`/projects/${slug}`}
          className="text-xs font-medium text-primary-700 hover:underline hover:underline-offset-2 transition-all duration-200 ease-in-out"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
