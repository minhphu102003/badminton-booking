export const SPORT_CATEGORIES = [
  'All',
  'Racquet',
  'Team',
  'Water',
  'Recreation',
  'Fitness',
  'EventSpaces',
  'Stay',
  'Classes',
  'Other',
] as const;

export type SportCategory = (typeof SPORT_CATEGORIES)[number];
