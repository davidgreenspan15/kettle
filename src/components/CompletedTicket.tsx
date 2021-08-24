import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';

import { Ticket } from '../types/user';
import { statusColor } from './RegularTicket';

const CompletedTicket: React.FC<{ t: Ticket }> = ({ t }) => {
  return (
    <>
      <HStack>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          w="100%"
          flexWrap="wrap"
        >
          <TicketLabel
            title="Course"
            value={
              getTeeTimeInfo(t)?.CourseName.replace(' Golf Course', '') ?? ''
            }
          />

          <TicketLabel
            title="Time"
            value={getTeeTimeInfo(t)?.ScheduledTime ?? ''}
          />

          <TicketLabel
            title="Players"
            value={`${getTeeTimeInfo(t)?.NumberOfPlayers}` ?? ''}
          />
        </Flex>
        <Box
          minW={['72px', '100px']}
          textTransform="capitalize"
          alignSelf="end"
          p="10px"
          textAlign="center"
          fontSize={['10px', '16px']}
          border="1px solid"
          color={statusColor(t.status)}
        >
          {t.status}
        </Box>
      </HStack>
    </>
  );
};

export default CompletedTicket;

const getTeeTimeInfo = (t: Ticket) => {
  let response =
    t.searches &&
    t.searches.length > 0 &&
    t.searches[t.searches.length - 1].response &&
    t.searches[t.searches.length - 1].response;
  if (response) {
    const { CourseName, ScheduledTime, NumberOfPlayers } = response;
    return { CourseName, ScheduledTime, NumberOfPlayers };
  }
};

const TicketLabel: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => {
  return (
    <Flex flexDirection="column" flexGrow={1} m={0}>
      <Heading size="md" color="gray">
        {title}
      </Heading>
      <Text textTransform="capitalize">{value}</Text>
    </Flex>
  );
};
