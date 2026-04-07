"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollToHash() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Delay to allow animations to settle
    }
  }, [searchParams]);

  return null;
}
