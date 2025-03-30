import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return <main className="max-container padding-container ">{children}</main>;
}
