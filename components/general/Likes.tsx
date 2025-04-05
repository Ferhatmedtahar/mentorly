"use client";

import { createClient } from "@/utils/supabase/client";
import { Heart } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { toggleLike } from "../../actions/likes"; // Import the server action

export default function Likes({
  slug,
  size,
  userId,
}: {
  readonly slug: string;
  readonly size: number;
  readonly userId: string;
}) {
  const supabase = createClient();
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchLikes = async () => {
      const { data: project } = await supabase
        .from("projects")
        .select("id")
        .eq("slug", slug)
        .single();
      if (!project) return;

      const projectId = project.id;

      // Get total likes
      const { count } = await supabase
        .from("likes")
        .select("*", { count: "exact", head: true })
        .eq("project_id", projectId);

      if (count !== null) setLikes(count);

      // Check if user has liked
      const { data: existingLike } = await supabase
        .from("likes")
        .select("*")
        .eq("user_id", userId)
        .eq("project_id", projectId)
        .single();

      if (existingLike) setHasLiked(true);
    };

    fetchLikes();
  }, [slug, userId]);

  const handleLike = async () => {
    startTransition(async () => {
      await toggleLike({ userId, slug });
      setHasLiked((prev) => !prev);
      setLikes((prev) => (hasLiked ? prev - 1 : prev + 1));
    });
  };

  return (
    <div className="flex justify-end items-center">
      <button
        onClick={handleLike}
        disabled={isPending}
        className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flexCenter flex-col"
      >
        <Heart
          size={size}
          fill={hasLiked ? "var(--color-primary-600)" : "none"}
          className={hasLiked ? "text-primary-600" : ""}
        />
        <span className="text-sm">{likes}</span>
      </button>
    </div>
  );
}
