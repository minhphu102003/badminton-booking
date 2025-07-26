import './FooterLinkGroup.scss';

type LinkItem = {
  label: string;
  href: string;
};

type Props = {
  title: string;
  links: LinkItem[];
  className?: string;
};

export default function FooterLinkGroup({ title, links, className = '' }: Props) {
  return (
    <div className={`footer-link-group ${className}`}>
      <ul className="list-unstyled">
        <li className="footer-title fw-bold mb-2">{title}</li>
        {links.map((link) => (
          <li key={link.label} className="footer-link mb-1">
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
