import React from "react";

interface LayoutChildren {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutChildren) {
  return (
    <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">{children}</div>
  );
}
