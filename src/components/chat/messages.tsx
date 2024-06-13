import Image from "next/image";
import React from "react";
import pic from "../../../public/assets/pic.jpg";
import { MoreHorizontalIcon } from "lucide-react";
import CustomAvatar from "./customAvatar";

export default function Messages() {
  return (
    <div className="h-full w-full p-5">
      {/* user */}
      <div className="flex items-center gap-2 justify-end">
        <p className="bg-blue-500 rounded-tr-none rounded-2xl px-4 py-1">
          I just wanna say hello!
        </p>
        <CustomAvatar img={pic} />
      </div>

      {/* friend */}
      <div className="flex items-center gap-2">
        <CustomAvatar img={pic} />
        <p className="bg-gray-200 rounded-tl-none rounded-2xl px-4 py-1">
          I just wanna say hello!
        </p>
      </div>
    </div>
  );
}
