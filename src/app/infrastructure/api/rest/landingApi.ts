import { LandingContent } from '@/app/domain/landingContent';

export async function fetchLandingContent(): Promise<LandingContent> {
  const res = await fetch('https://api.example.com/landing');
  return res.json();
}
