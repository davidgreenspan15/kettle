import { Ticket } from '../types/user';
import axios from 'axios';
import { SearchForm } from '../types/search';
let baseUrl =
  process.env.REACT_APP_LOCAL === 'True'
    ? 'http://localhost:8000'
    : 'https://kettle-pot.herokuapp.com';

export const createTicket = async (body: SearchForm) => {
  let myHeaders = new Headers();

  try {
    const ticket = await axios.post<Ticket>(
      `${baseUrl}/tickets`,
      {
        ...body,
      },
      { method: 'POST', headers: myHeaders }
    );
    return ticket.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMyTickets = async (uuid: string) => {
  let myHeaders = new Headers();

  try {
    const ticket = await axios.post<Ticket[]>(
      `${baseUrl}/tickets/${uuid}/`,
      {},
      { method: 'POST', headers: myHeaders }
    );
    return ticket.data;
  } catch (err) {
    console.log(err);
  }
};

export const cancelTicket = async (id: number) => {
  let myHeaders = new Headers();

  try {
    const ticket = await axios.post<Ticket>(
      `${baseUrl}/tickets/${id}/cancel`,
      {},
      { method: 'POST', headers: myHeaders }
    );
    return ticket.data;
  } catch (err) {
    console.log(err);
  }
};
