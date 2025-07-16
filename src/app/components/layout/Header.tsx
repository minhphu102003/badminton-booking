import Image from 'next/image';
import '../../styles/header.scss';
import { Button } from '@/app/presentation/components/ui/Button';
import LanguageDropdown from '@presentation/components/LanguageDropdown/LanguageDropdown';

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <div className="d-flex justify-content-between align-items-center">
          <a href="#" className="header__logo-link">
            <Image
              src="https://png.pngtree.com/element_pic/00/16/09/2057e0eecf792fb.jpg"
              className="header__logo"
              alt="Logo"
              width={50}
              height={50}
            />
          </a>
          <ul className="d-flex align-items-center list-unstyled header__nav">
            <LanguageDropdown />
            <li>
              <Button variant="ghost">Help</Button>
            </li>
            <li>
              <Button variant="ghost">Sign Up</Button>
            </li>
            <li>
              <Button variant="primary">Log In</Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
