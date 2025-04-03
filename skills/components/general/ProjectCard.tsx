import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Author } from "@/types/Author";
import { Heart } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  id?: string;
  title: string;
  description: string;
  profiles: Author;
  skills: string[];
  collaboration_type: string;
  slug: string;
  className?: string;
  likes: number;
}

const ProjectCard = ({
  title,
  description,
  profiles,
  skills,
  likes,
  collaboration_type: collaborationType,
  slug,
  className,
}: ProjectCardProps) => {
  console.log(collaborationType);
  return (
    <div className={cn("startup-card group", className)}>
      <div className="flex justify-between items-start mb-3">
        <Link
          href={`/profile/${profiles.username}`}
          className="flex items-center gap-2"
        >
          <Avatar className="h-8 w-8">
            {profiles.avatar_url ? (
              <Image
                height={40}
                width={40}
                src={profiles.avatar_url}
                alt={profiles.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <AvatarFallback className="bg-primary text-white">
                <span>{profiles.name[0]}</span>
              </AvatarFallback>
            )}
          </Avatar>
          <span className="text-16-medium">{profiles.name}</span>
        </Link>
        <button className="text-muted-foreground hover:text-primary transition-colors   cursor-pointer flexCenter flex-col ">
          <Heart size={20} />
          <span className="text-sm">{likes}</span>
        </button>
      </div>

      <Link href={`/projects/${slug}`} className="block group">
        <h3 className="text-26-semibold text-primary-700 dark:text-white transition-colors line-clamp-2">
          {title}
        </h3>
      </Link>
      <p className="startup-card-desc my-2 text-slate-800 dark:text-slate-100">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {skills.slice(0, 3).map((skill: string) => (
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
