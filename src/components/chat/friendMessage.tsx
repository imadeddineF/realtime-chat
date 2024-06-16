"use client";
import React from "react";
import CustomAvatar from "./customAvatar";
import { StaticImageData } from "next/image";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Toaster, toast } from "sonner";

interface FriendMessageProps {
  profileImg: string | StaticImageData;
  userName: string;
  msgContent: string;
  time: string;
  isImg?: boolean;
  isFile?: boolean;
  isAudio?: boolean;
  isVideo?: boolean;
  isSent: boolean;
  isSeen: boolean;
  seen?: string;
}

export default function FriendMessage({
  profileImg,
  userName,
  msgContent,
  time,
  isImg,
  isFile,
  isAudio,
  isVideo,
  isSent,
  isSeen,
  seen,
}: FriendMessageProps) {
  const handleDeleteMessage = () => {
    toast.success("Message has been  deleted!");
  };

  return (
    <div className="flex items-center gap-2">
      <Toaster richColors />
      <CustomAvatar img={profileImg} />
      <p className="relative bg-gray-200 mt-10 rounded-2xl px-4 py-1">
        {/* Message content */}
        <ContextMenu>
          <ContextMenuTrigger>{msgContent}</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem onClick={handleDeleteMessage}>
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        {/* <div className="absolute -left-2 top-0 w-0 h-0 border-4 border-gray-200 border-l-transparent border-b-transparent" /> */}
        <p className="absolute -top-5 left-0 text-[13px] text-gray-600">
          <span className="mr-1 font-bold">{userName}</span>
          <span>{time}</span>
        </p>
        <span className="absolute -bottom-[18px] right-2 text-[13px]">
          {isSent ? (
            isSeen ? (
              <p className="text-gray-600">
                <span className="mr-1 text-[13px]">seen</span>
                <span className="text-[11px]">{seen}</span>
              </p>
            ) : (
              <span className=" text-gray-600">sent</span>
            )
          ) : (
            <span className=" text-red-500">failed!</span>
          )}
        </span>
      </p>
    </div>
  );
}
