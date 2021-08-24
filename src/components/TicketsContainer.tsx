import { Button, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { cancelTicket } from '../requests/ticket';
import { Ticket } from '../types/user';
import TicketCard from './TicketCard';

const TicketsContainer: React.FC<{
  tickets?: Ticket[];
  setTickets: React.Dispatch<React.SetStateAction<Ticket[]>>;
}> = ({ tickets, setTickets }) => {
  const handleCancel = async (id: number) => {
    try {
      const ticket = await cancelTicket(id);
      if (ticket) {
        let newTickets: Ticket[] = [];
        tickets?.forEach(t => {
          if (t.id === ticket.id) {
            newTickets.push(ticket);
          } else {
            newTickets.push(t);
          }
        });
        setTickets(newTickets ?? []);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [expiredTickets, setExpiredTickets] = useState<Ticket[]>([]);
  const [currentTickets, setCurrentTickets] = useState<Ticket[]>([]);
  const [expToggle, setExpToggle] = useState(false);
  useEffect(() => {
    let e: Ticket[] = [];
    let c: Ticket[] = [];

    tickets?.forEach(t => {
      if (new Date(t.date) < new Date(Date.now() - 1000 * 60 * 60 * 48)) {
        console.log(t);
        e.push(t);
      } else {
        c.push(t);
      }
    });
    setCurrentTickets(c);

    setExpiredTickets(e);
  }, [tickets]);

  return (
    <Stack flexDirection="column" spacing={4} m={0} w="100%">
      {currentTickets?.map((t, idx) => {
        return (
          <TicketCard
            tickets={tickets}
            setTickets={setTickets}
            t={t}
            idx={idx}
          />
        );
      })}
      {expiredTickets.length > 0 && (
        <Button
          variant="outline"
          colorScheme="yellow"
          onClick={() => {
            setExpToggle(!expToggle);
          }}
        >
          {expToggle ? 'Hide Previous Tickets' : 'Show Previous Tickets'}
        </Button>
      )}
      {expToggle &&
        expiredTickets?.map((t, idx) => {
          return (
            <TicketCard
              tickets={tickets}
              setTickets={setTickets}
              t={t}
              idx={idx}
            />
          );
        })}
    </Stack>
  );
};
export default TicketsContainer;
