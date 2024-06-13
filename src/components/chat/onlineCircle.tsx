import Link from "next/link";
import React from "react";
import { StaticImageData } from "next/image";
import CustomAvatar from "./customAvatar";

interface onlineCircleProps {
  img: StaticImageData | string;
  username: string;
  chatLink: string;
}

export default function OnlineCircle({
  img,
  username,
  chatLink,
}: onlineCircleProps) {
  return (
    <Link href={chatLink} className="relative cursor-pointer">
      <CustomAvatar
        username={username}
        img={img}
        online={true}
        displayName={true}
      />
    </Link>
  );
}
