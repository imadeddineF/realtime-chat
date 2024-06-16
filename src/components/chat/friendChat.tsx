"use client";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import CustomAvatar from "./customAvatar";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

interface friendsChatProps {
  img: StaticImageData | string;
  username: string;
  lastMessage: string;
  lastMessageTime: string;
  chatLink: string;
}

export default function FriendChat({
  img,
  username,
  lastMessage,
  lastMessageTime,
  chatLink,
}: friendsChatProps) {
  const handleDeleteMessage = () => {
    console.log("Chat has been deleted!");
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Link
          href={chatLink}
          className="relative flex items-center gap-3 bg-gray-500 hover:bg-gray-600 cursor-pointer transition-all duration-300 p-2"
        >
          <CustomAvatar username={username} img={img} />

          <div className="flex flex-col">
            <h2 className="font-bold">{username}</h2>
            <p>{lastMessage}</p>
          </div>

          <span className="absolute top-2 right-2 text-[12px] text-gray-700">
            {lastMessageTime}
          </span>
        </Link>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={handleDeleteMessage}>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
