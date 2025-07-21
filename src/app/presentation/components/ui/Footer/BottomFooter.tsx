import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
  WhatsappIcon,
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
  return (
    <div className="bottom-footer d-flex justify-content-between align-items-center py-3 px-3">
      <p className="mb-0">© 2025 | Tobi Tobi Copy Right</p>
      <ul className="d-flex align-items-center gap-3 list-unstyled mb-0">
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
