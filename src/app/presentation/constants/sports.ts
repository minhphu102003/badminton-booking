import { SportCategory } from './sportCategories';

export type SportItem = {
  title: string;
  slug: string;
  image: string;
};

export const SPORTS_DATA: Record<SportCategory, SportItem[]> = {
  Racquet: [
    {
      title: 'Pickleball',
      slug: 'pickleball',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yuREbS95MseFB4N2QTMbvxTOy7NxWbxswQPXV3eC0YOlXwUADT5lLfDk4z1T1AS533k&usqp=CAU',
    },
    {
      title: 'Badminton',
      slug: 'badminton',
      image:
        'https://media.istockphoto.com/id/1761333789/photo/badminton-shuttlecocks-and-racket-placed-in-the-corner-of-a-synthetic-field.jpg?s=612x612&w=0&k=20&c=3rr4BZqe1rDWsCe6LF_YPCXZe6Um5jizc6d6n96U1Q4=',
    },
    {
      title: 'Padel',
      slug: 'padel',
      image:
        'https://media.istockphoto.com/id/1363976548/photo/paddle-tennis-racket-and-balls-on-the-blue-paddle-court.jpg?s=612x612&w=0&k=20&c=yxbb5H6rbALy_YG5awOHCRyn7Ge02SQL8SwAcbeKIwA=',
    },
    {
      title: 'Squash',
      slug: 'squash',
      image:
        'https://t4.ftcdn.net/jpg/03/16/44/79/360_F_316447975_uIMxb3opZLjpd2qSahdfQivLRCv2DQoy.jpg',
    },
    {
      title: 'Tennis',
      slug: 'tennis',
      image:
        'https://plus.unsplash.com/premium_photo-1666913667082-c1fecc45275d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVubmlzfGVufDB8fDB8fHww',
    },
    {
      title: 'Table Tennis',
      slug: 'tabletennis',
      image:
        'https://media.istockphoto.com/id/1425158165/photo/table-tennis-ping-pong-paddles-and-white-ball-on-blue-board.jpg?s=612x612&w=0&k=20&c=KSdi4bEGoxdhaGMnl6CZaqTLbKbobArgrrpLem3oN98=',
    },
  ],
  Team: [
    {
      title: 'Futsal',
      slug: 'futsal',
      image:
        'https://t4.ftcdn.net/jpg/06/84/11/45/360_F_684114561_54bnmuviQhUHO7TTmOjRgW0FRuvq6yip.jpg',
    },
    {
      title: 'Football',
      slug: 'football',
      image:
        'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGwlMjB0cm9waHl8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Volleyball',
      slug: 'volleyball',
      image:
        'https://media.istockphoto.com/id/1473259144/photo/volleyball-ball-and-net-in-voleyball-arena-during-a-match.jpg?s=612x612&w=0&k=20&c=vbn1S1xDKY7XO5lGdR14FCLhHkWXcjoS49j4-Cc1Ukg=',
    },
    {
      title: '3x3 Basketball',
      slug: '3xbasketball',
      image:
        'https://media.istockphoto.com/id/183256716/photo/ball-and-basketball-court.jpg?s=612x612&w=0&k=20&c=dJwew7Yn4ltyv3pmKF-K9GVST_4LVMObSh-Wn5BzA3U=',
    },
    {
      title: 'Basketball',
      slug: 'basketball',
      image:
        'https://media.istockphoto.com/id/183256716/photo/ball-and-basketball-court.jpg?s=612x612&w=0&k=20&c=dJwew7Yn4ltyv3pmKF-K9GVST_4LVMObSh-Wn5BzA3U=',
    },
    {
      title: 'Netball',
      slug: 'netball',
      image:
        'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/1b99a176-52ac-4e00-ad36-202f7086f352/snapshots-finding-community-through-netball-with-maggi-gao%C2%A0.jpg',
    },
    {
      title: 'Field Hockey',
      slug: 'fieldHockey',
      image:
        'https://plus.unsplash.com/premium_photo-1719318342412-0364f5038437?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZpZWxkJTIwaG9ja2V5fGVufDB8fDB8fHww',
    },
    {
      title: 'Dodgeball',
      slug: 'dodgeball',
      image:
        'https://gophersport.com/media/catalog/product/g/s/gs58333_dodgemaniaelem-1.jpg?optimize=low&bg-color=255,255,255&fit=bounds&height=&width=',
    },
    {
      title: 'Lawn Bowl',
      slug: 'lawnBowl',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfLQByBgiHRTDImVFLyLEJAcmtNW5I-iMtA&s',
    },
    {
      title: 'Frisbee',
      slug: 'frisbee',
      image:
        'https://images.unsplash.com/photo-1649772317307-988009f89c2f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpc2JlZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Captain Ball',
      slug: 'captainBall',
      image:
        'https://highachievers.com.sg/cdn/shop/products/16029911603_b3687fdfac.jpg?v=1527378108',
    },
    {
      title: 'Handball',
      slug: 'handBall',
      image:
        'https://ichef.bbci.co.uk/childrens-responsive-ichef-live/976/childrens-binary-store/r/1x/cbbc/spt_Handball-guide-hero2.jpg',
    },
    {
      title: 'Indoor Hockey',
      slug: 'indoorHockey',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr8JaF8_dLdabYD65beFyOwKnTJecYJNehHQ&s',
    },
    {
      title: 'Sepak Takraw',
      slug: 'sepakTakraw',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2CWTK72-3r3OIdiZyrQLoTUmh5den18vcQ&s',
    },
    {
      title: 'Tegball',
      slug: 'tegball',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tca35GyOI6j2cr5Q_lQzFJGWqu_-o8cI-Q&s',
    },
    {
      title: 'Flag Football',
      slug: 'flagFootball',
      image: 'https://www.misshsaa.com/wp-content/uploads/2025/04/2025-Flag-Football-424A7327.jpg',
    },
    {
      title: 'Rugby',
      slug: 'rugby',
      image:
        'https://resources.worldrugby-rims.pulselive.com/photo-resources/worldrugby/photo/2023/11/04/f5d8c727-2073-48be-809e-50fa96f604cc/1773950645.jpg?width=1024',
    },
  ],
  Water: [
    {
      title: 'Free Diving',
      slug: 'freeDiving',
      image:
        'https://i.natgeofe.com/n/c54440a5-5471-462d-8156-a5a4b1ebb908/ST_meettheadventurer_georgina-DaanVerhoeven-304A4287_ukHR.gif',
    },
    {
      title: 'Mermaiding',
      slug: 'mermaiding',
      image:
        'https://www.mikesdivestore.com/cdn/shop/articles/Mermaiding.jpg?v=1651676924&width=1600',
    },
    {
      title: 'Scuba Diving',
      slug: 'scubaDiving',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/8/8a/Discover_Scuba_Diving_--_St._Croix%2C_US_Virgin_Islands.jpg',
    },
    {
      title: 'Swimming',
      slug: 'swimming',
      image:
        'https://blog.myswimpro.com/wp-content/uploads/2023/10/freestyle-stroke-breathing-technique-myswimpro.jpeg',
    },
  ],
  Recreation: [
    {
      title: 'Bowling',
      slug: 'bowling',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7zWdYmNh9zLItHLOQh6WTEChDgOsEqVux3A&s',
    },
    {
      title: 'Bumper Car',
      slug: 'bumperCar',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqV61FCkBgzzBmdadDAoeHpWaaT1QL0suTw&s',
    },
    {
      title: 'Driving Range',
      slug: 'drivingRange',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9ihZDxMNNCTWEki6wcVm2Jq24Gn0xiBkbg&s',
    },
    {
      title: 'Foosball',
      slug: 'foosball',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-O0xwz0dzbbLSa4YCLlTFN9e6C1_rQbEuQ&s',
    },
    {
      title: 'Golf Driving Range',
      slug: 'golfDrivingRange',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBk5j-uotOnB6KU3_z6FDXQW4x6LHzhjTPhA&s',
    },
    {
      title: 'Go-Kart',
      slug: 'go-kart',
      image:
        'https://res.klook.com/image/upload/c_fill,w_750,h_750/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tmcydogbpzmead5hciqc.jpg',
    },
    {
      title: 'Martial Arts',
      slug: 'martialArts',
      image: 'https://fitgymsoftware.com/images/blogs/martial-arts.webp',
    },
    {
      title: 'Pool Table',
      slug: 'poolTable',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNOBjAueBpJlW0jzD7tUoUEbR26IUEP0Raig&s',
    },
    {
      title: 'Rollerblading',
      slug: 'rollerblading',
      image:
        'https://outdoorswire.usatoday.com/wp-content/uploads/sites/114/2023/01/rollerblading-gear.jpg?w=1024&h=576&crop=1',
    },
  ],
  Fitness: [
    {
      title: 'Dance Studio',
      slug: 'danceStudio',
      image:
        'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/481932jXf/anh-mo-ta.png',
    },
    {
      title: 'Fitness Space',
      slug: 'fitnessSpace',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4EMVoPri1SKTqAfWAbnGj6GaMpBa-gNm6w&s',
    },
    {
      title: 'Gym',
      slug: 'gym',
      image: 'https://hdfitness.vn/wp-content/uploads/2022/02/A-50-scaled.jpg',
    },
    {
      title: 'Gymnastic',
      slug: 'gymnastic',
      image:
        'https://cdn.britannica.com/88/244788-050-D0815591/Simone-Biles-on-balance-beam-2020-Tokyo-Olympic-Games.jpg',
    },
    {
      title: 'Running Track',
      slug: 'runningTrack',
      image:
        'https://hips.hearstapps.com/hmg-prod/images/running-track-1667904802.jpg?crop=0.668xw:1.00xh;0.0737xw,0&resize=1200:*',
    },
    {
      title: 'Wall Climbing',
      slug: 'wallClimbing',
      image: 'https://awesomewalls.ie/wp-content/uploads/2024/01/0052-RP_00549-684x1024.jpg',
    },
  ],
  EventSpaces: [
    {
      title: 'Dance Studio',
      slug: 'danceStudio1',
      image:
        'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/481932jXf/anh-mo-ta.png',
    },
    {
      title: 'Fitness Space',
      slug: 'fitnessSpace1',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4EMVoPri1SKTqAfWAbnGj6GaMpBa-gNm6w&s',
    },
    {
      title: 'Event Space',
      slug: 'eventSpace',
      image:
        'https://colony.work/wp-content/uploads/2019/12/Copy-of-StarBoulevard-56-min-1024x532.jpg',
    },
    {
      title: 'Sporty Celebration',
      slug: 'sportyCelebration',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSic68lkzFrI3m1OD1GhqnggagDbMbBOi91A&s',
    },
    {
      title: 'Event Room',
      slug: 'eventRoom',
      image:
        'https://meetings.skift.com/wp-content/uploads/2017/09/engaging-room-layouts-for-event-planners-scaled.jpg',
    },
  ],
  Stay: [
    {
      title: 'Chalet',
      slug: 'chalet',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgoWTH1-v2vKwTMZ9xDa94IPL-X7JYauEgwA&s',
    },
  ],
  Classes: [
    {
      title: 'Boxing',
      slug: 'boxing',
      image:
        'https://cdn.britannica.com/76/187976-050-D8DA2DA7/Floyd-Mayweather-Jr-ducks-Philippines-Manny-Pacquiao-May-2-2015.jpg',
    },
    {
      title: 'Fitness',
      slug: 'fitness',
      image:
        'https://images.everydayhealth.com/images/healthy-living/fitness/everything-you-need-know-about-fitness-1440x810.jpg?sfvrsn=2fee0a3b_5',
    },
    {
      title: 'Grappling',
      slug: 'grappling',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hawaiian_State_Grappling_Championships.jpg',
    },
    {
      title: 'Kickboxing',
      slug: 'kickboxing',
      image: 'https://cdn.onefc.com/wp-content/uploads/2023/10/image-2-1200x800.png',
    },
    {
      title: 'MMA',
      slug: 'MMA',
      image:
        'https://cdnphoto.dantri.com.vn/VYXwgzdWaO1FsCgCGLwN4crhAXk=/thumb_w/1020/2025/07/13/dat06561-edited-1752363732108.jpg',
    },
    {
      title: 'Muay Thai',
      slug: 'muayThai',
      image:
        'https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/muay_thai_va_nhung_dieu_ban_chua_biet_UU_Apx_1672414622_813878dfca.png',
    },
    {
      title: 'Taekwondo',
      slug: 'taekwondo',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/5/5d/Milad_Kharchegani_at_the_2016_Summer_Olympics.jpg',
    },
  ],
  Other: [
    {
      title: 'Badminton Academy',
      slug: 'badmintonAcademy',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxuutX8HduKl2eiBeqSWo1VdXcOS9UxzsKhQ&s',
    },
  ],
  All: [],
};

export function getSportsByCategory(category: SportCategory): SportItem[] {
  return SPORTS_DATA[category];
}

export function getSportDetail(category: SportCategory, slug: string): SportItem | undefined {
  return getSportsByCategory(category).find((s) => s.slug === slug);
}
