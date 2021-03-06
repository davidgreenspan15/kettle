import { ReservationRequest } from '../types/reserve';

let baseUrl =
  process.env.REACT_APP_LOCAL === 'True'
    ? 'http://localhost:8000'
    : 'https://kettle-pot.herokuapp.com';

interface Data {
  body: ReservationRequest;
  cookies: string;
}
export const reserve = (data: Data) => {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  let raw = JSON.stringify({ data: data.body, cookies: data.cookies });

  return fetch(`${baseUrl}/reserve`, {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  })
    .then(response => response.json())
    .catch(error => console.log('error', error));
};

export const createReserveOBJ = (response: any) => {
  let d = response.data;
  let match = response.data.r06[0];
  let body: ReservationRequest = {
    p02: [
      {
        r01: match.r06, //r06
        r02: match.r05, //r05
        r03: match.r13, //r13
        r04: match.r03, //r03
        r05: match.r03, //r03
        r06: match.r02.toFixed(0), //r02 (fixed(0)?)
        r07: match.r20, //r20
      },
    ],
    p01: match.r01, //r01
    p03: d.r02, // in root r02
  };
  let cookies = response.headers['set-cookie'][0].split(';')[0];
  console.log({ body, cookies });

  return { body, cookies };
};
