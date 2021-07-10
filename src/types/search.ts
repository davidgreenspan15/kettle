export interface SearchResponse {
  headers: Headers;
  data: Data;
  status: number;
}

export interface Data {
  r01: string;
  r02: string;
  r03: string;
  r04: string;
  r05: any[];
  r06: R06[];
}

export interface R06 {
  r01: string;
  r02: number;
  r03: number;
  r04: number;
  r05: number;
  r06: number;
  r07: number;
  r08: number;
  r09: number;
  r10: number;
  r11: number;
  r12: number;
  r13: number;
  r14: number;
  r15: string;
  r16: string;
  r17: string;
  r18: number;
  r19: null;
  r20: string;
  r21: number;
  r22: null;
  r23: null;
  r24: string;
  r25: string;
  r26: string;
  r27: string;
  r28: string;
  r29: null;
  r30: R30;
  r31: string;
}

export enum R30 {
  Empty = '\u00ad$',
}

export interface Headers {
  'cache-control': string;
  pragma: string;
  'content-type': string;
  expires: string;
  vary: string;
  server: string;
  'strict-transport-security': string;
  'x-aspnet-version': string;
  'set-cookie': string[];
  p3p: string;
  'content-security-policy': string;
  date: string;
  connection: string;
  'content-length': string;
}

// Generated by https://quicktype.io

export interface CourseDB {
  CourseID: number;
  RegionName: RegionName;
  AreaName: AreaName;
  CourseName: string;
  CityName: string;
  CityID: number;
  CountryName: CountryName;
}

export type AreaName = 'Newark' | 'Northern New Jersey';

export type CountryName = 'United States';

export type RegionName = 'New Jersey';

export enum R16 {
  DarlingtonGolfCourse = 'Darlington Golf Course',
  OrchardHillsGolfCourse = 'Orchard Hills Golf Course',
  OverpeckGolfCourse = 'Overpeck Golf Course',
  RockleighGolfCourseBlue = 'Rockleigh Golf Course - Blue',
  RockleighGolfCourseRedWhite = 'Rockleigh Golf Course - Red/White',
  SoldierHillGolfCourse = 'Soldier Hill Golf Course',
  ValleyBrookGolfCourse = 'Valley Brook Golf Course',
}

export interface SearchRequest {
  p01: number[]; // courses
  p02: string; // date format(MM/DD/YYY)
  p03: string; // start time formaat("H:MM S")
  p04: string; // end time formaat("H:MM S")
  p05: number; // min players 0
  p06: number; // max players up to 4
  p07: boolean; //false
}

export interface SearchForm {
  userId: string;
  courses: number[]; // courses
  date: string; // date format(MM/DD/YYY)
  startTime: string; // start time formaat("H:MM S")
  endTime: string; // end time formaat("H:MM S")
  min: number; // min players 0
  max: number; // max players up to 4
}

const rez = {
  r01: 'ffe772dc-d814-4297-8328-fd12a44cd390',
  r02: '0',
  r03: 'c0z0kv0zs2dvkwvyuxryhdke', // cookie
  r04: '999',
  r05: [],
  r06: [
    {
      r01: '52ac6325-c55a-4454-95b6-9b0d728ec548',
      r02: -1.0,
      r03: 460755,
      r04: 50445,
      r05: 304,
      r06: 17703,
      r07: 24268,
      r08: 22.0,
      r09: 35.0,
      r10: 304,
      r11: 4,
      r12: 460755,
      r13: 50428,
      r14: 4,
      r15: '2021-07-08T06:40:00',
      r16: 'Darlington Golf Course (10th Tee)',
      r17: '2021-07-08T00:00:00',
      r18: 24,
      r19: null,
      r20: '304',
      r21: 22.0,
      r22: null,
      r23: null,
      r24: '6:40 AM',
      r25: '22.0000',
      r26: '22.0000',
      r27: '',
      r28: '5,6,9',
      r29: null,
      r30: '­$',
      r31: '',
    },
  ],
};

const req = {
  p02: [
    {
      r01: 17703, //r06
      r02: 304, //r05
      r03: 50428, //r13
      r04: 460755, //r03
      r05: 460755, //r03
      r06: -1, //r02 (fixed(0)?)
      r07: '304', //r20
    },
  ],
  p01: '52ac6325-c55a-4454-95b6-9b0d728ec548', //r01
  p03: '0', // in root r02
};
