import React from "react";
import { Input } from "../ui/input";
import { Send, ImagePlusIcon, FilePlusIcon } from "lucide-react";

export default function InputMessage() {
  return (
    <div className="w-full flex items-center gap-3 bg-orange-300 p-2">
      <ImagePlusIcon />
      <FilePlusIcon />
      <Input className="border-2 h-8 border-black" />
      <div className="border border-black h-9 w-9 flex items-center justify-center rounded-full cursor-pointer">
        <Send />
      </div>
    </div>
  );
}
