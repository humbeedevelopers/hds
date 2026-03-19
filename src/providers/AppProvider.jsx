"use client";

import { ProgressProvider } from "@/context/ProgressContext";

export default function AppProvider({ children }) {
  return <ProgressProvider>{children}</ProgressProvider>;
}
