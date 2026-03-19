"use client";

import { useEffect } from "react";
import { useProgress } from "@/context/ProgressContext";

export default function useExactLoaderLogic() {
  const { setProgressPercentageValue } = useProgress();

  useEffect(() => {

    const EXPECTED_SIZE_IN_BYTES = 8800000;

    let currentLoadedBytes = 0;
    let currentPercentage = 0;
    let isPageLoaded = false;

    const updateDisplay = (percent) => {
      setProgressPercentageValue(percent);
      console.log(`Loader: ${percent}%`);
    };

    let observer;

    if (window.PerformanceObserver) {
      observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();

        entries.forEach((entry) => {
          if (entry.encodedBodySize) {
            currentLoadedBytes += entry.encodedBodySize;
          }
        });

        let calculatedPercent = Math.floor(
          (currentLoadedBytes / EXPECTED_SIZE_IN_BYTES) * 100
        );

        if (!isPageLoaded) {
          if (calculatedPercent > 99) {
            currentPercentage = 99;
          } else {
            currentPercentage = calculatedPercent;
          }

          updateDisplay(currentPercentage);
        }
      });

      observer.observe({ type: "resource", buffered: true });
    }

    const finishLoader = () => {
      if (isPageLoaded) return;
      isPageLoaded = true;

      console.log("Page Load Event Fired. Finishing Loader...");

      const interval = setInterval(() => {
        if (currentPercentage >= 100) {
          clearInterval(interval);

          updateDisplay(100);
        } else {
          currentPercentage++;
          updateDisplay(currentPercentage);
        }
      }, 10);
    };

    window.addEventListener("load", finishLoader);

    const fallback = setTimeout(finishLoader, 10000);

    return () => {
      window.removeEventListener("load", finishLoader);
      if (observer) observer.disconnect();
      clearTimeout(fallback);
    };

  }, [setProgressPercentageValue]);
}
