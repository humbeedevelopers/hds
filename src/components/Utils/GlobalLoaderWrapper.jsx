"use client";

import { useProgress } from "@/context/ProgressContext";
import useRealLoaderProgress from "@/hooks/useRealLoaderProgress";
import Loader from "./Loader";

export default function GlobalLoaderWrapper({ children }) {
  useRealLoaderProgress();

  const { progressPercentageValue } = useProgress();

  if (progressPercentageValue < 100) {
    return <Loader />;
  }

  return children;
}
