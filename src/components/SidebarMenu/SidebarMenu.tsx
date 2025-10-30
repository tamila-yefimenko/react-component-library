import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronForward, IoChevronDown, IoClose } from 'react-icons/io5';

export interface MenuItem {
  label: string;
  onClick?: () => void;
  children?: MenuItem[];
}

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  onClose,
  items,
}) => {
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const renderItems = (menuItems: MenuItem[], level = 0) => (
    <ul className={`pl-${level * 4} space-y-1`}>
      {menuItems.map(item => (
        <li key={item.label}>
          <button
            className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-left text-gray-800 hover:bg-gray-100 ${
              level > 0 ? 'text-sm' : 'text-base font-medium'
            }`}
            onClick={() => {
              if (item.children) {
                toggleSubmenu(item.label);
              } else {
                item.onClick?.();
                onClose();
              }
            }}
          >
            <span>{item.label}</span>
            {item.children &&
              (openSubmenus[item.label] ? (
                <IoChevronDown size={16} />
              ) : (
                <IoChevronForward size={16} />
              ))}
          </button>

          <AnimatePresence>
            {item.children && openSubmenus[item.label] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {renderItems(item.children, level + 1)}
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                <IoClose />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4">
              {renderItems(items)}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default SidebarMenu;
