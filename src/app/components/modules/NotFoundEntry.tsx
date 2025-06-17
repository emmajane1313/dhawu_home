"use client";

export default function NotFoundEntry({ dict }: { dict: any }) {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-x-hidden text-center px-2">
      {dict?.error}
    </div>
  );
}
