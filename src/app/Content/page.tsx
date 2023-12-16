// components/Content.js
"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";

export default function Content() {
  const ws = useMediaQuery("(min-width:1024px)");

  return ws ? (
    <div className="flex-grow mt-16 bg-slate-300"></div>
  ) : (
    <div className="flex-grow bg-blue-200">
      <div>Content Mobile</div>
    </div>
  );
}
