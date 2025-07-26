import { HeaderLogo } from '../Logo';
import FooterLinkGroup from './FooterLinkGroup';
import './TopFooter.scss';

type Props = {
  logoUrl: string;
};

export default function TopFooter({ logoUrl }: Props) {
  return (
    <div className="top-footer d-flex justify-content-between align-items-center">
      <div className="me-5">
        <HeaderLogo src={logoUrl} />
      </div>

      <FooterLinkGroup
        title="For Business"
        links={[
          { label: 'Facility Management', href: '' },
          { label: 'Schedule a Demo', href: '' },
        ]}
      />
      <FooterLinkGroup
        title="About"
        links={[
          { label: 'About Us', href: '' },
          { label: 'Blog', href: '' },
          { label: 'Careers', href: '' },
        ]}
      />
      <FooterLinkGroup
        title="Support"
        className="footer-group--wrap"
        links={[
          { label: 'Help Centre', href: '' },
          { label: 'Contact Us', href: '' },
        ]}
      />
      <FooterLinkGroup
        title="Legal"
        className="footer-group--wrap"
        links={[
          { label: 'Terms of Use', href: '' },
          { label: 'Privacy Policy', href: '' },
        ]}
      />
    </div>
  );
}
