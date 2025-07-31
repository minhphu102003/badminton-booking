import './HeaderGame.scss';
import { FilterIcon } from '@presentation/icons';
import { Button } from '../Button';

type HeaderGameProps = {
  gameNumber: number;
  onClickFilter: () => void;
};

export default function HeaderGame({ gameNumber, onClickFilter }: HeaderGameProps) {
  return (
    <div className="header-game d-flex align-items-center justify-content-between">
      <span className="header-game__title">{gameNumber + ' games'}</span>
      <Button variant="ghost" onClick={onClickFilter} className="header-game__button">
        <FilterIcon />
        <span>Filter</span>
      </Button>
    </div>
  );
}
