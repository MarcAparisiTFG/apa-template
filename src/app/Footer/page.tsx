// components/Footer.js
"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";

export default function Footer() {
  const isWideScreen = useMediaQuery("(min-width:1024px)");

  return (
    <div className=" h-16 w-full bg-slate-50 flex justify-center items-center">
      {isWideScreen ? (
        <div>Footer Content for DESKTOP</div>
      ) : (
        <div>Footer Content for MOBILE</div>
      )}
    </div>
  );
}
