import { Flex } from '@chakra-ui/react';
import React from 'react';

import { Ticket } from '../types/ticket';

const TicketsContainer: React.FC<{ tickets?: Ticket[] }> = ({ tickets }) => {
  React.useEffect(() => {
    console.log(tickets);
  }, [tickets]);
  return (
    <Flex flexDirection="column">
      {tickets?.map((t, idx) => {
        return <p key={idx}>{t.id}</p>;
      })}
    </Flex>
  );
};
export default TicketsContainer;
