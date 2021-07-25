import { Stack, Text, Button } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';
import { cancelTicket } from '../requests/ticket';

import { Ticket } from '../types/user';
import CompletedTicket from './CompletedTicket';
import RegularTicket from './RegularTicket';
import SearchesContainer from './SearchesContainer';

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
  return (
    <Stack flexDirection="column" spacing={4} m={0} w="100%">
      {tickets?.map((t, idx) => {
        return (
          <Stack
            flexDirection="column"
            spacing={4}
            key={idx}
            boxShadow={'-1px 0px 9px 3px lightgrey'}
            w="100%"
            pt={['10px', '20px']}
            px={['10px', '20px']}
            pb={['10px', '10px']}
            color="black"
          >
            {t.status === 'complete' ? (
              <CompletedTicket t={t} />
            ) : (
              <RegularTicket t={t} />
            )}
            <SearchesContainer t={t} />
            {t.status === 'searching' && (
              <Button
                background="#aa0f0f"
                onClick={() => {
                  handleCancel(t.id);
                }}
              >
                Cancel
              </Button>
            )}
            <Text>
              Created: {moment(t.createdAt).format('MMMM Do YYYY, h:mm a')}
            </Text>
          </Stack>
        );
      })}
    </Stack>
  );
};
export default TicketsContainer;
