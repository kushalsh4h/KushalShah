"use client";

import { useState, useEffect } from "react";
import { Component as LumaSpin } from "./luma-spin";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can adjust this or remove it for real loading logic)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // Show loader during loading - black background with white animations
    return (
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black">
        <LumaSpin />
      </div>
    );
  }

  // Preloader is done, return null so the main page content renders correctly
  return null;
};