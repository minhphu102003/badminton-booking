import { ReactNode } from 'react';
import { SidebarUser } from '@presentation/components/ui/Sidebar';
import { PencilIcon, BellFillICon } from '@presentation/icons';

type LayoutWithSidebarProps = {
  children: ReactNode;
};

const listItems = [
  {
    title: 'Me',
    items: [
      { label: 'My Profile', icon: <PencilIcon />, path: '/user' },
      { label: 'My Bookings', icon: <PencilIcon />, path: '/user/bookings' },
      { label: 'My Games', icon: <PencilIcon />, path: '/user/games' },
      { label: 'My Invoices', icon: <PencilIcon />, path: '/user/invoices' },
      { label: 'Notification', icon: <BellFillICon />, path: '/user/notification' },
    ],
  },
  {
    title: 'Account Settings',
    items: [
      { label: 'Edit Profile', icon: <PencilIcon />, path: '/user/edit-profile' },
      { label: 'Link Social Accounts', icon: <PencilIcon />, path: '/user/link-social' },
      { label: 'Create Password', icon: <PencilIcon />, path: '/user/create-password' },
      { label: 'Language', icon: <PencilIcon />, path: '/user/language' },
    ],
  },
  {
    title: 'More on Badminton',
    items: [
      { label: 'About Us', icon: <PencilIcon />, path: '/about' },
      { label: 'Courtsite Blog', icon: <PencilIcon />, path: '/blog' },
      { label: 'Join More Game', icon: <PencilIcon />, path: '/join-more-game' },
    ],
  },
  {
    title: 'For Business',
    items: [
      { label: 'Facility Management', icon: <PencilIcon />, path: '/facility-management' },
      { label: 'Schedule a Demo', icon: <PencilIcon />, path: '/schedule-demo' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'Help Centre', icon: <PencilIcon />, path: '/help' },
      { label: 'WhatsApp Us', icon: <PencilIcon />, path: '/whatsapp' },
    ],
  },
];

export default function LayoutWithSidebar({ children }: LayoutWithSidebarProps) {
  return (
    <div className="with-sidebar-layout container-custom">
      <SidebarUser listItems={listItems} />

      <main className="primary-content-area">{children}</main>
    </div>
  );
}
