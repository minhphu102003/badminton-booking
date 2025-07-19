import { SearchFormContainer } from '../../Form';
import './Banner.scss';

type Props = {
  onSearch: () => void;
};

export default function BannerWithSearch({ onSearch }: Props) {
  return (
    <section className="banner position-relative text-white">
      <div className="banner__overlay"></div>
      <div className="banner__content container text-center">
        <h1 className="mb-2">Get Active, Book Your Games Now</h1>
        <p className="mb-8">
          From favorites like badminton and futsal to trendy pickleball and frisbee, play all kinds
          of sports nationwide!
        </p>
        <div className="search-box d-flex justify-content-center">
          <SearchFormContainer onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
}
