'use client';

import { HeaderGame } from '@presentation/components/ui/HeaderNav';
import { ListButton } from '@presentation/components/ui/List';
import { SPORT_VENUE_BUTTON } from '@presentation/constants/sportVenue';

export default function HomePage() {
  const handleFilterClick = () => {
    console.log('Handle filter click');
  };

  const handleCategoryClick = (id: string) => {
    console.log('Clicked category id:', id);
  };

  return (
    <div className="container-custom content-wrapper">
      <ListButton
        listCategoryButton={SPORT_VENUE_BUTTON}
        onClickCategoryButton={handleCategoryClick}
      />
      <HeaderGame gameNumber={4} onClickFilter={handleFilterClick} />
    </div>
  );
}
