import { Ticket } from '../types/user';
import axios from 'axios';
import { SearchForm } from '../types/search';
export const createTicket = async (body: SearchForm) => {
  let myHeaders = new Headers();

  try {
    const ticket = await axios.post<Ticket>(
      'http://localhost:8000/tickets/create',
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
      `http://localhost:8000/tickets/${uuid}/`,
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
      `http://localhost:8000/tickets/${id}/cancel`,
      {},
      { method: 'POST', headers: myHeaders }
    );
    return ticket.data;
  } catch (err) {
    console.log(err);
  }
};
