"use client";

import { useEffect } from "react";

export function SchuleBodyClass() {
  useEffect(() => {
    document.body.classList.add("schule-mode");
    return () => {
      document.body.classList.remove("schule-mode");
    };
  }, []);

  return null;
}


