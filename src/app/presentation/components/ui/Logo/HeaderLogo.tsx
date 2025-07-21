import Image from 'next/image';
import './HeaderLogo.scss';

type HeaderLogoProps = {
  src: string;
  href?: string;
  alt?: string;
  width?: number;
  height?: number;
};

export default function HeaderLogo({
  src,
  href = '#',
  alt = 'Logo',
  width = 50,
  height = 50,
}: HeaderLogoProps) {
  return (
    <a href={href} className="header__logo-link">
      <Image src={src} className="header__logo" alt={alt} width={width} height={height} />
    </a>
  );
}
