export const SPORT_VENUE = [
  'pickleball',
  'badminton',
  'futsal',
  'volleyball',
  'football',
  'tennis',
  'basketball',
  'field hockey',
  'squash',
  'netball',
  'dodgeball',
  'frisbee',
  'other',
];

export const SPORT_VENUE_LIST = SPORT_VENUE.map((label, index) => ({
  id: index + 1,
  label,
}));

export type Venue = {
  id: number;
  venueName: string;
  location: string;
  listSports: string[];
  imgUrl: string;
};

export const SPORT_VENUES_BY_SPORT: Record<string, Venue[]> = {
  badminton: [
    {
      id: 1,
      venueName: 'Badminton Hall District 1',
      location: '123 Nguyen Trai, D1, HCMC',
      listSports: ['badminton'],
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k55pclXE2vMHVxyiQ866WMGd93bpufMv_g&s',
    },
    {
      id: 2,
      venueName: 'Saigon Sports Center',
      location: '45 Vo Van Tan, D3, HCMC',
      listSports: ['badminton', 'tennis'],
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k55pclXE2vMHVxyiQ866WMGd93bpufMv_g&s',
    },
  ],
  football: [
    {
      id: 3,
      venueName: 'Youth Football Stadium',
      location: '678 Le Van Sy, Tan Binh',
      listSports: ['football'],
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k55pclXE2vMHVxyiQ866WMGd93bpufMv_g&s',
    },
    {
      id: 4,
      venueName: 'District 7 Football Arena',
      location: '12 Nguyen Huu Tho, D7, HCMC',
      listSports: ['football'],
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k55pclXE2vMHVxyiQ866WMGd93bpufMv_g&s',
    },
  ],
  tennis: [
    {
      id: 5,
      venueName: 'Elite Tennis Club',
      location: '23 Nguyen Van Troi, Phu Nhuan',
      listSports: ['tennis'],
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k55pclXE2vMHVxyiQ866WMGd93bpufMv_g&s',
    },
    {
      id: 6,
      venueName: 'Green Court Tennis',
      location: '456 Le Thanh Ton, D1, HCMC',
      listSports: ['tennis'],
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k55pclXE2vMHVxyiQ866WMGd93bpufMv_g&s',
    },
  ],
  basketball: [
    {
      id: 7,
      venueName: 'District 5 Basketball Gym',
      location: '78 Tran Hung Dao, D5, HCMC',
      listSports: ['basketball'],
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k55pclXE2vMHVxyiQ866WMGd93bpufMv_g&s',
    },
    {
      id: 8,
      venueName: 'Hoop City',
      location: '901 Nguyen Oanh, Go Vap, HCMC',
      listSports: ['basketball'],
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k55pclXE2vMHVxyiQ866WMGd93bpufMv_g&s',
    },
  ],
  volleyball: [
    {
      id: 9,
      venueName: 'City Volleyball Center',
      location: '234 Phan Xich Long, Phu Nhuan',
      listSports: ['volleyball'],
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k55pclXE2vMHVxyiQ866WMGd93bpufMv_g&s',
    },
  ],
  futsal: [
    {
      id: 10,
      venueName: 'Futsal Arena D2',
      location: '109 Xuan Thuy, D2, HCMC',
      listSports: ['futsal'],
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k55pclXE2vMHVxyiQ866WMGd93bpufMv_g&s',
    },
  ],
  pickleball: [
    {
      id: 11,
      venueName: 'Pickleball Hub',
      location: '88 Pham Viet Chanh, Binh Thanh',
      listSports: ['pickleball'],
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k55pclXE2vMHVxyiQ866WMGd93bpufMv_g&s',
    },
  ],
  squash: [
    {
      id: 12,
      venueName: 'Downtown Squash Court',
      location: '61 Ham Nghi, D1, HCMC',
      listSports: ['squash'],
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k55pclXE2vMHVxyiQ866WMGd93bpufMv_g&s',
    },
  ],
  netball: [
    {
      id: 13,
      venueName: 'Netball Training Hall',
      location: '35 Nguyen Dinh Chieu, D3, HCMC',
      listSports: ['netball'],
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k55pclXE2vMHVxyiQ866WMGd93bpufMv_g&s',
    },
  ],
  frisbee: [
    {
      id: 14,
      venueName: 'Frisbee Park',
      location: 'Central Park, Binh Thanh',
      listSports: ['frisbee'],
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k55pclXE2vMHVxyiQ866WMGd93bpufMv_g&s',
    },
  ],
  dodgeball: [
    {
      id: 15,
      venueName: 'Dodgeball Arena',
      location: '93 Nguyen Thai Hoc, D1, HCMC',
      listSports: ['dodgeball'],
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k55pclXE2vMHVxyiQ866WMGd93bpufMv_g&s',
    },
  ],
  field_hockey: [
    {
      id: 16,
      venueName: 'Field Hockey Complex',
      location: 'Thu Duc Campus, HCMC',
      listSports: ['field hockey'],
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k55pclXE2vMHVxyiQ866WMGd93bpufMv_g&s',
    },
  ],
  other: [
    {
      id: 17,
      venueName: 'Multi-purpose Sports Hall',
      location: 'City Center, HCMC',
      listSports: ['other'],
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k55pclXE2vMHVxyiQ866WMGd93bpufMv_g&s',
    },
  ],
};
