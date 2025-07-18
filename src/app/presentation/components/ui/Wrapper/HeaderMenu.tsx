import Link from 'next/link';
import { HeaderMenu } from '../../HeaderMenu';
import { Button } from '../Button';

const menuItems = [
  { label: 'Explore', href: '/explore' },
  { label: 'Book', href: '/book' },
  { label: 'Games', href: '/games' },
  { label: 'Deals', href: '/deals' },
];

export default function Header() {
  return (
    <nav className="d-flex align-items-center px-3">
      <HeaderMenu
        items={menuItems}
        listClassName="d-flex gap-3 list-unstyled m-0"
        itemClassName="d-flex align-items-center"
        renderItem={(item, index) => (
          <Link href={item.href} key={index} className="text-decoration-none">
            <Button variant="ghost">{item.label}</Button>
          </Link>
        )}
      />
    </nav>
  );
}
