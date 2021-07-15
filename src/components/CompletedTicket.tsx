import { Flex, Heading, Text, Stack } from '@chakra-ui/react';
import React from 'react';
import { Ticket } from '../types/user';
const CompletedTicket: React.FC<{ t: Ticket }> = ({ t }) => {
  return (
    <>
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
        <TicketLabel title="Status" value={t.status} />
      </Flex>
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        px={'20px'}
      ></Flex>
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
  console.log(response, 'resp');
  if (response) {
    const { CourseName, ScheduledTime, NumberOfPlayers } = response;
    return { CourseName, ScheduledTime, NumberOfPlayers };
  }
};

const statusColor = (t: Ticket) => {
  switch (t.status) {
    case 'complete':
      return 'green';
    case 'searching':
      return 'rgb(238 191 0)';
    case 'failed':
      return 'red';
    case 'cancelled':
      return 'gray';
    default:
      break;
  }
};

const TicketLabel: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => {
  return (
    <Flex flexDirection="column" flexGrow={1}>
      <Heading size="md" color="gray">
        {title}
      </Heading>
      <Text textTransform="capitalize">{value}</Text>
    </Flex>
  );
};

// const DateTimeFields: React.FC<{date:string, set:React.Dispatch<React.SetStateAction<string>>}> = ({set}) => {
//   return (
//     <Flex flexDirection="column" flexGrow={1}>
//     <Heading color="gray" size="xs">
//       Date
//     </Heading>
//     <Input
//       type="date"
//       w="100%"
//       defaultValue={date}
//       onChange={e => set(e.target.value)}
//     ></Input>
//   </Flex>
//   );
// };
