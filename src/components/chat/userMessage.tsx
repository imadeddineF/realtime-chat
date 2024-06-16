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

interface UserMessageProps {
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

export default function UserMessage({
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
}: UserMessageProps) {
  const handleDeleteMessage = () => {
    toast.success("Message has been  deleted!");
  };

  return (
    <div className="flex items-center gap-2 justify-end">
      <Toaster richColors />
      <p className="relative bg-blue-500 mt-10 rounded-2xl px-4 py-1">
        {/* Message content */}
        <ContextMenu>
          <ContextMenuTrigger>{msgContent}</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem onClick={handleDeleteMessage}>
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        {/* <div className="absolute -right-2 top-0 w-0 h-0 border-4 border-blue-500 border-r-transparent border-b-transparent" /> */}
        <p className="absolute -top-5 right-0 text-gray-600">
          <span className="mr-1 font-bold text-[13px]">{userName}</span>
          <span className="text-[12px]">{time}</span>
        </p>
        <span className="absolute -bottom-[18px] left-2">
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

      <CustomAvatar img={profileImg} />
    </div>
  );
}
