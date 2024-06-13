import React from "react";
import { ModeToggle } from "../shared/modeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <h1>WhatsApp Clone</h1>
      <ModeToggle />
    </nav>
  );
}
