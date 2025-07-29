import { Landing } from '@presentation/components/Landing';
import { BannerWithSearch } from '@presentation/components/ui/Banner';

export default function HomePage() {
  return (
    <>
      <BannerWithSearch variant="deals" />
      <Landing isDisplayBlog={false} />
    </>
  );
}
