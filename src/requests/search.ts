import axios from 'axios';
let baseUrl =
  process.env.REACT_APP_LOCAL === 'True'
    ? 'http://localhost:8000'
    : 'https://kettle-pot.herokuapp.com';

export const searchTickets = async () => {
  try {
    const resp = await axios.get<any>(
      `${baseUrl}/search`,

      { method: 'GET' }
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
