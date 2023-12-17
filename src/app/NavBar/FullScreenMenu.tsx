import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRightIcon,
  XMarkIcon,
  ArrowSmallLeftIcon,
} from "@heroicons/react/24/outline";
import { DropdownItem, menuOptionsFullScreen } from "@/constants";
import { useRouter } from "next/navigation";

interface ActionSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const ActionSheet: React.FC<ActionSheetProps> = ({ isOpen, onClose }) => {
  const [activeMenu, setActiveMenu] = useState(menuOptionsFullScreen);
  const [menuStack, setMenuStack] = useState<DropdownItem[][]>([]);

  const [breadcrumbPath, setBreadcrumbPath] = useState<string[]>([]);

  const router = useRouter();

  const handleBack = () => {
    setMenuStack((prevStack) => prevStack.slice(0, -1));
    setBreadcrumbPath((prevPath) => prevPath.slice(0, -1));
    setActiveMenu(menuStack[menuStack.length - 2] || menuOptionsFullScreen);
  };

  const handleMenuItemClick = (item: DropdownItem) => {
    if (item.items && item.items.length > 0) {
      setMenuStack((prevStack) => [...prevStack, item.items]);
      setBreadcrumbPath((prevPath) => [...prevPath, item.label]);
      setActiveMenu(item.items);
    } else {
      router.push(item.href);
      onClose();
    }
  };

  const menuVariants = {
    enter: { x: "100%", opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      variants={{
        open: { y: 0 },
        closed: { y: "100%" },
      }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-white p-4 shadow-lg"
    >
      <div className="flex justify-between items-center w-full top-4">
        <button
          onClick={handleBack}
          className={`justify-self-start text-gray-700 hover:text-gray-900 ${
            menuStack.length > 0 ? "" : "hidden"
          }`}
        >
          <ArrowSmallLeftIcon className="h-6 w-6" />
        </button>
        <div className=" text-xs text-gray-400 ">
          {breadcrumbPath.join(" / ")}
        </div>
        <button
          onClick={onClose}
          className="  text-gray-700 hover:text-gray-900"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
      <AnimatePresence>
        <motion.div
          key={menuStack.length}
          variants={menuVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.2, type: "linear" }}
          className="absolute inset-0 flex flex-col m-5 mt-20"
        >
          <div className="flex flex-col space-y-4 gap-2">
            {activeMenu.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center"
                onClick={() => handleMenuItemClick(item)}
              >
                <div className="text-sm text-gray-700 hover:text-blue-500 flex-grow text-start">
                  {item.label}
                </div>
                {item.items && item.items.length > 0 && (
                  <ChevronRightIcon className="h-6 w-6 ml-2" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ActionSheet;
