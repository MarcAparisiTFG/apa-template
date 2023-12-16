"use client"; // This is a client component 👈🏽
import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";
import { SearchBar } from "./SearchBar";
import Menu from "./Menu";

export default function NavBar() {
  const WS = useMediaQuery("(min-width:1024px)");

  return WS ? (
    <div className="fixed h-16 w-full bg-slate-50 flex justify-around text-center items-center">
      <div>Logo</div>
      <SearchBar ws={WS} />
      <Menu />
    </div>
  ) : (
    <div className="fixed h-16 w-full bg-yellow-200 flex justify-around text-center items-center">
      <Menu />
      <div>Logo</div>
      <SearchBar ws={WS} />
    </div>
  );
}
