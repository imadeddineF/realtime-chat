import React from "react";
import { Input } from "../ui/input";
import { Send, ImagePlusIcon, FilePlusIcon, MicIcon } from "lucide-react";

export default function InputMessage() {
  return (
    <div className="w-full flex items-center gap-3 bg-orange-300 p-3">
      <ImagePlusIcon />
      <FilePlusIcon />
      <Input
        className="border-[1px] rounded-full xl h-8 w-full border-black"
        placeholder="Type a message.."
      />
      <MicIcon />
      <div className="p-1 border flex justify-center items-center border-black rounded-lg cursor-pointer">
        <Send />
      </div>
    </div>
  );
}
