import './UserInformation.scss';
import Image from 'next/image';
import { formatJoinDate } from '@/app/shared/utils/format';
import { PencilIcon } from '@presentation/icons';
import { Button } from '../Button';

type UserInformationProps = {
  user: {
    imgUrl: string;
    userName?: string;
    email?: string;
    timeJoin?: string;
    bookingMade?: number;
    bookingHours?: number;
    gameJoin?: number;
  };
  onEdit: () => void;
};

export default function UserInformation({ user, onEdit }: UserInformationProps) {
  const { imgUrl, userName, email, timeJoin, bookingHours, bookingMade, gameJoin } = user;

  return (
    <div className="user-info">
      <div className="user-info__header">
        <div className="user-info__avatar-wrapper">
          <Image src={imgUrl} alt="User avatar" width={120} height={120} />
          <button className="user-info__edit-btn" onClick={onEdit}>
            <span className="user-info__edit-icon">
              <PencilIcon />
            </span>
          </button>
        </div>
      </div>

      <div className="user-info__content">
        <h6 className="user-info__name">{userName || 'User Name'}</h6>
        <p className="user-info__email">{email || 'user@gmail.com'}</p>
      </div>

      <div className="user-info__joined">
        <span>{'Joined since ' + formatJoinDate(timeJoin)}</span>
      </div>

      <div className="user-info__stats">
        <Button variant="ghost" className="user-stat">
          <div className="user-stat__value">{bookingMade ?? 0}</div>
          <div className="user-stat__label">bookings made</div>
        </Button>
        <Button variant="ghost" className="user-stat">
          <div className="user-stat__value">{bookingHours ?? 0}</div>
          <div className="user-stat__label">booking hours</div>
        </Button>
        <Button variant="ghost" className="user-stat">
          <div className="user-stat__value">{gameJoin ?? 0}</div>
          <div className="user-stat__label">games joined</div>
        </Button>
      </div>
    </div>
  );
}
