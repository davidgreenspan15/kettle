import { SearchRequest } from '../types/search';
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

export interface Option {
  label: string;
  value: number;
  type: string;
}
