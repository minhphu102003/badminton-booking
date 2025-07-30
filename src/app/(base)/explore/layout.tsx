import { ReactNode } from 'react';
import { BannerWithSearch } from '@/app/presentation/components/ui/Banner';

type LayoutExploreProps = {
  children: ReactNode;
};

export default function LayoutExplore({ children }: LayoutExploreProps) {
  return (
    <>
      <BannerWithSearch variant="explore" />
      <div>{children}</div>
    </>
  );
}
