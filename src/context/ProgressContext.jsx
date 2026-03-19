"use client";

import { createContext, useState, useContext } from "react";

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progressPercentageValue, setProgressPercentageValue] = useState(0);

  return (
    <ProgressContext.Provider
      value={{ progressPercentageValue, setProgressPercentageValue }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error("Context Error");
  return context;
};
