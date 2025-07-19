import Image from 'next/image';
import './SportCard.scss';

type Props = {
  name: string;
  imageUrl: string;
  onClick?: () => void;
};

export default function SportCard({ name, imageUrl, onClick }: Props) {
  return (
    <div className="sport-card" onClick={onClick}>
      <div className="sport-card__image-wrapper">
        <Image
          src={imageUrl}
          alt={name}
          className="sport-card__image"
          height={100}
          width={300}
          style={{ objectFit: 'cover', width: '100%' }}
        />
      </div>
      <p className="sport-card__name">{name}</p>
    </div>
  );
}
