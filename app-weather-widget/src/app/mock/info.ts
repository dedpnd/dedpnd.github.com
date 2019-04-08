import { of } from 'rxjs/internal/observable/of';

export interface Iinfo {
  img: string;
  address: string;
  phone: number;   // дополнительно задание pipe для форматирования
  weather: Iweather;
  social_info: IsocialInfo;
  type: string;
}

export interface Iweather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

export interface IsocialInfo {
  title: string;
  img: string;
  followers: number;
  following: number;
}

const info: Iinfo[] = [
  {
    img: 'https://picsum.photos/500/300/?image=1',
    address: 'address1',
    phone: 111222333,
    weather: {
      title: 'title1',
      icon: 'cloud',
      water: 1,
      temperature: 1
    },
    social_info: {
      title: 'title1',
      img: 'https://picsum.photos/100/100/?image=23',
      followers: 1,
      following: 1
    },
    type: 'type1'
  },
  {
    img: 'https://picsum.photos/500/300/?image=3',
    address: 'address2',
    phone: 111222333,
    weather: {
      title: 'title2',
      icon: 'cloud',
      water: 2,
      temperature: 2
    },
    social_info: {
      title: 'title2',
      img: 'https://picsum.photos/100/100/?image=34',
      followers: 2,
      following: 2
    },
    type: 'type2'
  },
  {
    img: 'https://picsum.photos/500/300/?image=36',
    address: 'address3',
    phone: 111222333,
    weather: {
      title: 'title3',
      icon: 'cloud',
      water: 3,
      temperature: 3
    },
    social_info: {
      title: 'title3',
      img: 'https://picsum.photos/100/100/?image=37',
      followers: 3,
      following: 3
    },
    type: 'type3'
  }
];

export const info$ = of(info);
