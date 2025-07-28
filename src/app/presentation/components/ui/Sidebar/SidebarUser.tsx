'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { LogoutICon, ChevronDownIcon, ChevronUpIcon } from '@presentation/icons';
import { Button } from '../Button';
import './SidebarUser.scss';

type MenuItem = {
  label: string;
  icon?: React.ReactNode;
  path: string;
};

type MenuGroup = {
  title: string;
  items: MenuItem[];
};

type SideBarUserProps = {
  listItems: MenuGroup[];
  onLogout?: () => void;
};

export default function SidebarUser({ listItems, onLogout }: SideBarUserProps) {
  const [expanded, setExpanded] = useState<boolean[]>(listItems.map((_, index) => index < 2));
  const pathname = usePathname();
  const router = useRouter();

  const toggleExpand = (index: number) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <aside className="sidebar">
      {listItems.map((group, index) => (
        <div key={index} className="sidebar__section">
          <Button
            className="sidebar__toggle-button w-100 text-start mb-2 d-flex justify-content-between align-items-center"
            onClick={() => toggleExpand(index)}
            variant="ghost"
          >
            <span>{group.title}</span>
            {expanded[index] ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Button>

          <AnimatePresence initial={false}>
            {expanded[index] && (
              <motion.ul
                key="expand"
                className="sidebar__list list-unstyled d-flex flex-column gap-1"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {group.items.map((item, i) => {
                  const isActive = pathname === item.path;

                  return (
                    <li key={i} className="sidebar__item">
                      <Button
                        variant="ghost"
                        className={`d-flex align-items-center gap-2 w-100 ${isActive ? 'actived' : ''}`}
                        onClick={() => router.push(item.path)}
                      >
                        {item.icon && <span className="sidebar__item-icon">{item.icon}</span>}
                        <span>{item.label}</span>
                      </Button>
                    </li>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}

      <Button
        className="sidebar__logout-button d-flex align-items-center gap-3 w-100"
        variant="ghost"
        onClick={onLogout}
      >
        <LogoutICon />
        <span className="text-uppercase">LOG OUT</span>
      </Button>
    </aside>
  );
}
