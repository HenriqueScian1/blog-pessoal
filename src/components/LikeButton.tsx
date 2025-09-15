"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LikeButtonProps {
  initialLikes?: number;
  postId: string;
}

const LikeButton = ({ initialLikes = 0, postId }: LikeButtonProps) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <Button
      variant={isLiked ? "default" : "outline"}
      size="sm"
      onClick={handleLike}
      className={`like-button gap-2 ${
        isLiked 
          ? "bg-primary hover:bg-primary/90" 
          : "border-primary text-primary hover:bg-primary/10"
      }`}
    >
      <Heart 
        className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} 
      />
      <span>{likes}</span>
      <span className="hidden sm:inline">
        {likes === 1 ? "curtida" : "curtidas"}
      </span>
    </Button>
  );
};

export default LikeButton;