import React from "react";
import { Input } from "../ui/input";

export default function SearchFriend() {
  return (
    <div className="bg-gray-200 p-2">
      <Input
        placeholder="Search for friends.."
        className="border-2 h-8 border-black"
      />
    </div>
  );
}
