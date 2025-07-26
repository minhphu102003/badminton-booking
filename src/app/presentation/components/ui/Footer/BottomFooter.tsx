'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
  WhatsappIcon,
  CloseIcon,
  PlusIcon,
} from '@presentation/icons';
import './BottomFooter.scss';

const SOCIALS = [
  { icon: <FacebookIcon />, href: 'https://facebook.com' },
  { icon: <InstagramIcon />, href: 'https://instagram.com' },
  { icon: <LinkedinIcon />, href: 'https://linkedin.com' },
  { icon: <TiktokIcon />, href: 'https://tiktok.com' },
  { icon: <WhatsappIcon />, href: 'https://whatsapp.com' },
];

export default function BottomFooter() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bottom-footer d-flex justify-content-between align-items-center py-3 px-3">
      <p className="mb-0">© 2025 | Tobi Tobi Copy Right</p>

      <ul className="social-list d-flex align-items-center gap-3 list-unstyled mb-0">
        {SOCIALS.map((item, idx) => (
          <li key={idx}>
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="social-link">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>

      <button className="toggle-social-btn" onClick={() => setOpen(!open)}>
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0.5 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <CloseIcon />
            </motion.span>
          ) : (
            <motion.span
              key="plus"
              initial={{ rotate: 90, opacity: 0.5 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <PlusIcon />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <ul className={`floating-social-menu list-unstyled ${open ? 'open' : ''}`}>
        {SOCIALS.map((item, idx) => (
          <li key={idx}>
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="social-link">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
