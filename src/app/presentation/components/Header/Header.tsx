import './header.scss';
import { HeaderNav } from '../HeaderNav';
import { HeaderLogo } from '../ui/Logo';
import { HeaderMenu } from '../ui/Wrapper';

export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="header__inner container">
          <div className="d-flex justify-content-between align-items-center">
            <HeaderLogo
              src="https://png.pngtree.com/element_pic/00/16/09/2057e0eecf792fb.jpg"
              href="/"
            />
            <HeaderNav />
          </div>
        </div>
      </div>
      <div className="wrapper__headerMenu">
        <HeaderMenu />
      </div>
    </header>
  );
}
