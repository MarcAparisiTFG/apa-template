// components/Menu.tsx
import React, { useState } from "react";
import useModal from "@/hooks/useModal";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import DropdownMenu from "./DropdownMenu";
import FullScreenMenu from "./FullScreenMenu";
import { AnimatedHamburger } from "./AnimatedHamburguer";
import { DropdownItem, menuOptionsFullScreen } from "@/constants";

const Menu: React.FC = () => {
  const { isOpenModal: dropDownModal, handleModal: handleModalDropDown } =
    useModal();
  const { isOpenModal: fullMenuModal, handleModal: handleFullMenuModal } =
    useModal();
  const [dropDownItems, setDropDownItems] = useState<DropdownItem[]>([]);

  const isWideScreen = useMediaQuery("(min-width:1024px)");
  const handleDropdownClick = (items: DropdownItem[] | undefined) => {
    setDropDownItems(items ?? []);
    handleModalDropDown();
  };
  return (
    <div className="relative">
      {isWideScreen ? (
        <nav>
          <div className="flex">
            {menuOptionsFullScreen.map((item, index) => (
              <div
                key={index}
                className="py-2 px-4 flex items-center hover:text-gray-900"
              >
                {item.items && item.items.length > 0 ? (
                  <button
                    onClick={() => handleDropdownClick(item.items)}
                    className="flex items-center text-gray-700"
                  >
                    <span>{item.label}</span>
                    <ChevronDownIcon className="h-6 w-6 ml-2" />
                  </button>
                ) : (
                  <Link href={item.href} className="text-gray-700">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <DropdownMenu
            isOpenModal={dropDownModal}
            dropDownItems={dropDownItems}
          />
        </nav>
      ) : (
        <>
          <AnimatedHamburger
            isOpen={fullMenuModal}
            onClick={handleFullMenuModal}
          ></AnimatedHamburger>

          <FullScreenMenu
            isOpen={fullMenuModal}
            onClose={handleFullMenuModal}
          />
        </>
      )}
    </div>
  );
};

export default Menu;
