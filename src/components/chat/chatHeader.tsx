import React from "react";
import { Phone, Video } from "lucide-react";
import SearchMessage from "./searchMessage";
import { StaticImageData } from "next/image";
import CustomAvatar from "./customAvatar";

interface chatHeaderProps {
  username: string;
  img: StaticImageData | string;
}

export default function ChatHeader({ username, img }: chatHeaderProps) {
  return (
    <header className="flex items-center justify-between w-full bg-violet-500 p-2">
      <h1 className="font-bold text-lg">{username}</h1>
      <div className="flex items-center gap-3">
        <SearchMessage />
        <Phone className="cursor-pointer" />
        <Video className="cursor-pointer" />
        <CustomAvatar username={username} img={img} />
      </div>
    </header>
  );
}
