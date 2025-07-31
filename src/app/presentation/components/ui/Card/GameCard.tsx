import './GameCard.scss';
import Image from 'next/image';
import Link from 'next/link';
import { GeoIcon, ClockIcon, PeopleFillIcon, ArrowRightIcon } from '@presentation/icons';
import { AvatarStack } from '../Avatar';
import { Button } from '../Button';

type GameCardProp = {
  linkUrl: string;
  imgUrl: string;
  sport: string;
  venueName: string;
  hostName: string;
  campus: string;
  courtName: string;
  dateStart: string;
  dateEnd?: string;
  time: string;
  maxTeam: number;
  participant: number;
  avatarUrl: string[];
};

export default function GameCard({
  linkUrl,
  imgUrl,
  sport,
  venueName,
  hostName,
  campus,
  courtName,
  dateStart,
  dateEnd,
  time,
  participant,
  maxTeam,
  avatarUrl,
}: GameCardProp) {
  return (
    <Link href={linkUrl} className="game-card">
      <div className="container">
        <div className="row g-3">
          <div className="col-6">
            <Image alt="" src={imgUrl} height={100} width={100} className="game-card__image" />
          </div>
          <div className="col-6">
            <span className="game-card__sport">{sport}</span>
            <h2 className="game-card__venue">{venueName}</h2>
            <p className="game-card__host">{'Host by ' + hostName}</p>
          </div>
        </div>

        <div className="row g-3 mt-0">
          <div className="col-6">
            <GeoIcon />
          </div>
          <div className="col-6">
            <p className="game-card__campus">{campus}</p>
            <span className="game-card__court">{'Booked: ' + courtName}</span>
          </div>
        </div>

        <div className="row g-3 mt-0">
          <div className="col-6">
            <ClockIcon />
          </div>
          <div className="col-6">
            <p className="game-card__date">
              {dateEnd ? `${dateStart} - ${dateEnd}` : `${dateEnd}`}
            </p>
            <span className="game-card__time">{time}</span>
          </div>
        </div>

        <div className="row g-3 mt-0">
          <div className="col-6">
            <PeopleFillIcon />
          </div>
          <div className="col-6">
            <p className="game-card__game">Game is on!</p>
            <span className="game-card__detail">
              {maxTeam === participant
                ? 'Sorry, game is full'
                : `Looking for another ${maxTeam - participant} players`}
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <AvatarStack avatarUrls={avatarUrl} maxVisible={maxTeam} />
      </div>
      <div className="w-100 d-flex justify-content-end">
        <Button variant="ghost" className="d-flex gap-2">
          <span>view more</span>
          <ArrowRightIcon />
        </Button>
      </div>
    </Link>
  );
}
