import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className=" selection:bg-secondary-200  selection:text-primary-950 min-h-screen">
      {children}
    </main>
  );
}
