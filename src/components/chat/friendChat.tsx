import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import CustomAvatar from "./customAvatar";

interface friendsChatProps {
  img: StaticImageData | string;
  username: string;
  lastMessage: string;
  chatLink: string;
}

export default function FriendChat({
  img,
  username,
  lastMessage,
  chatLink,
}: friendsChatProps) {
  return (
    <Link
      href={chatLink}
      className="flex items-center gap-3 bg-gray-500 hover:bg-gray-600 cursor-pointer transition-all duration-300 p-2"
    >
      <CustomAvatar username={username} img={img} />

      <div className="flex flex-col">
        <h2 className="font-bold">{username}</h2>
        <p>{lastMessage}</p>
      </div>
    </Link>
  );
}
