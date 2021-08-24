import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import React, { useEffect, useState } from 'react';

import { cancelTicket } from '../requests/ticket';
import { Ticket } from '../types/user';

const TicketOptions: React.FC<{
  t: Ticket;
  idx: number;
  tickets?: Ticket[];
  setTickets: React.Dispatch<React.SetStateAction<Ticket[]>>;
}> = ({ tickets, setTickets, t, idx }) => {
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
    <Stack flexDirection="row" spacing={4} key={idx} alignSelf="flex-end">
      <Menu>
        <MenuButton textTransform="capitalize">
          <DeleteIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>Edit</MenuItem>
          <MenuItem>Delete</MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );
};
export default TicketOptions;
