"use client";

import { useEffect, useState } from "react";

export function useInSelectedWork() {
  const [inWork, setInWork] = useState(false);

  useEffect(() => {
    const handleCheck = () => {
      const isPinned = document.documentElement.getAttribute("data-selected-work-active") === "true";
      setInWork(isPinned);
    };

    window.addEventListener("selectedworkchange", handleCheck);
    handleCheck();
    return () => window.removeEventListener("selectedworkchange", handleCheck);
  }, []);

  return inWork;
}
