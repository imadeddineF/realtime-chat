import Link from "next/link";
import React from "react";
import CustomAvatar from "./customAvatar";
import { StaticImageData } from "next/image";

interface customFriendSearchProps {
  chatLink: string;
  profileImg: StaticImageData | string;
  online: boolean;
  username: string;
}

export default function CustomFriendSearch({
  chatLink,
  profileImg,
  online,
  username,
}: customFriendSearchProps) {
  return (
    <Link
      href={chatLink}
      className="flex items-center gap-3 py-2 px-3 w-full rounded-lg hover:bg-gray-200 cursor-pointer transition-all duration-300"
    >
      <CustomAvatar img={profileImg} username="imad eddine" online={online} />
      <p>{username}</p>
    </Link>
  );
}
