"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

export default function SearchMessage() {
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch(true);
  };

  return (
    <>
      {search ? (
        <Input
          placeholder="Search for messages.."
          className="border-2 h-8 border-black"
        />
      ) : (
        <Search onClick={handleSearch} className="cursor-pointer" />
      )}
    </>
  );
}
