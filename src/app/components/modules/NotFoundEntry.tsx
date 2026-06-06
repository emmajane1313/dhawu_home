"use client";

import type { Dictionary } from "../types/components.types";

export default function NotFoundEntry({ dict }: { dict: Dictionary }) {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-x-hidden text-center px-2">
      {dict?.error}
    </div>
  );
}
