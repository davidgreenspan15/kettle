import { SearchRequest } from '../types/search';
import moment from 'moment';
import axios from 'axios';
export const search = (body: SearchRequest) => {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  let raw = JSON.stringify(body);

  return fetch('http://localhost:8000/search', {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  }).then(response => response.json());
};

export const searchTickets = async () => {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  try {
    const resp = await axios.get<any>(
      'http://localhost:8000/search',

      { method: 'GET', headers: myHeaders }
    );
    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

const convertTime = (time: string) => {
  let startT = time.split(':');
  let startS = '';
  if (parseInt(startT[0]) > 12) {
    startT[0] = (parseInt(startT[0]) - 12).toString();
    startS = startT.join(':') + ' PM';
  } else if (parseInt(startT[0]) === 12) {
    startS = startT.join(':') + ' PM';
  } else {
    if (startT[0][0] === '0') {
      startT[0] = startT[0].substring(1);
    }
    startS = startT.join(':') + ' AM';
  }
  return startS;
};
export const createSearchOBJ = (
  startTime: string,
  endTime: string,
  selectedOption: Option[],
  date: string,
  players: number
) => {
  let start = convertTime(startTime);
  let end = convertTime(endTime);

  let obj: SearchRequest = {
    p01: selectedOption.map(o => o.value), // courses
    p02: moment(date).format('MM/DD/YYYY'), // date format(MM/DD/YYY)
    p03: start, // start time formaat("H:MM S")
    p04: end, // end time formaat("H:MM S")
    p05: 0, // min players 0
    p06: players, // max players up to 4
    p07: false, //false
  };
  return obj;
};

export interface Option {
  label: string;
  value: number;
  type: string;
}
