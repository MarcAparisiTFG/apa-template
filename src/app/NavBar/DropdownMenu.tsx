// components/DropdownMenu.tsx
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { DropdownItem } from "@/constants";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface DropdownMenuProps {
  isOpenModal: boolean;
  dropDownItems: DropdownItem[] | [];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isOpenModal,
  dropDownItems,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  if (!isOpenModal) return null;

  return (
    <div
      className="absolute right-0 w-48 py-2  mt-2 bg-white rounded-md shadow-xl z-50"
      ref={dropdownRef}
    >
      {dropDownItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <div className="flex px-2  justify-between row align-middle items-center text-center">
            <div className="block px-4 w-full py-2 text-sm i text-gray-700 hover:bg-gray-100">
              {item.label}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DropdownMenu;
