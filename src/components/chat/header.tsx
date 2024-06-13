import React from "react";
import { Settings } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center bg-red-500 p-3">
      <h1>header</h1>
      <Link href="/settings">
        <Settings />
      </Link>
    </header>
  );
}
