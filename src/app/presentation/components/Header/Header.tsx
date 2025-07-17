import './header.scss';
import { HeaderNav } from '../HeaderNav';
import { HeaderLogo } from '../Logo';

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <div className="d-flex justify-content-between align-items-center">
          <HeaderLogo
            src="https://png.pngtree.com/element_pic/00/16/09/2057e0eecf792fb.jpg"
            href="/"
          />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}
