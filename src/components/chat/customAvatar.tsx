import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StaticImageData } from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface customAvatarProps {
  username?: string;
  img: StaticImageData | string;
  online?: boolean;
  displayName?: boolean;
}

export default function CustomAvatar({
  username,
  img,
  online,
  displayName,
}: customAvatarProps) {
  // Determine the image source based on the type of img
  const imgSrc = typeof img === "string" ? img : img.src;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <Avatar className="cursor-pointer">
          <AvatarImage src={imgSrc} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {online && (
          <div className="absolute right-0 bottom-0 w-3 h-3 bg-green-400 rounded-full" />
        )}
      </div>
      {displayName && (
        <span className="text-black/60 font-light text-sm">{username}</span>
      )}
    </div>
  );
}
