"use client";

import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

interface LikeButtonProps {
  slug: string;
}

export default function LikeButton({ slug }: LikeButtonProps) {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  // Carrega os dados do localStorage quando o componente é montado
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLikes = localStorage.getItem(`likes-${slug}`);
      if (storedLikes) {
        setLikes(parseInt(storedLikes, 10));
      }
      
      const storedHasLiked = localStorage.getItem(`hasLiked-${slug}`);
      if (storedHasLiked === 'true') {
        setHasLiked(true);
      }
    }
  }, [slug]);

  // Esta função agora lida com o clique e a persistência dos dados
  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      
      // Salva os novos valores no localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem(`likes-${slug}`, newLikes.toString());
        localStorage.setItem(`hasLiked-${slug}`, 'true');
      }
    }
  };

  return (
    <button
      onClick={handleLike}
      disabled={hasLiked}
      className={`flex items-center space-x-2 p-2 rounded-full text-white transition-colors ${
        hasLiked ? 'bg-red-600' : 'bg-secondary hover:bg-red-600'
      }`}
    >
      <FaHeart />
      <span>{likes}</span>
    </button>
  );
}