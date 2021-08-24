import { Box, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import { courses } from '../config/courseDB';
import { Ticket } from '../types/user';

export const convertTime = (time: string) => {
  let startT = time.split(':');
  let startS = '';
  if (parseInt(startT[0]) > 12) {
    startT[0] = (parseInt(startT[0]) - 12).toString();
    startS = startT.join(':') + ' PM';
  } else if (parseInt(startT[0]) === 12) {
    startS = startT.join(':') + ' PM';
  } else {
    if (startT[0][0] === '0') {
      startT[0] = startT[0].substring(1);
    }
    startS = startT.join(':') + ' AM';
  }
  return startS;
};

const getCourseNames = (t: Ticket) => {
  let cArray: string[] = [];
  courses.forEach(c => {
    if (t.courses.includes(c.CourseID)) {
      cArray.push(c.CourseName);
    }
  });
  return cArray.join(', ');
};
export const statusColor = (status: string) => {
  return status === 'cancelled'
    ? 'gray'
    : status === 'failed'
    ? 'red'
    : status === 'Expired'
    ? 'gray'
    : status === 'searching'
    ? 'orange'
    : 'green';
};
const RegularTicket: React.FC<{ t: Ticket }> = ({ t }) => {
  const getNames = (t: Ticket) => {
    return (
      <Flex flexDirection="column" textAlign={['start', 'center']}>
        <Heading size="md" color="gray">
          Courses
        </Heading>
        <Text size="md">{getCourseNames(t)}</Text>
      </Flex>
    );
  };

  return (
    <HStack>
      <VStack
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        flexWrap="wrap"
        spacing="4"
      >
        {getNames(t)}
        <HStack spacing="4">
          <ScheduledDateLabel
            date={t.date}
            eTime={t.endTime}
            sTime={t.startTime}
          />
          <TicketLabel title="Players" value={`${t.max}`} />
        </HStack>
      </VStack>
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
      {/* <TicketLabel title="Status" value={t.status} /> */}
    </HStack>
  );
};
export default RegularTicket;

const TicketLabel: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => {
  return (
    <Flex flexDirection="column" flexGrow={1} alignItems="center">
      <Heading size="md" color="gray">
        {title}
      </Heading>
      <Text textTransform="capitalize">{value}</Text>
    </Flex>
  );
};

const ScheduledDateLabel: React.FC<{
  date: string;
  sTime: string;
  eTime: string;
}> = ({ date, sTime, eTime }) => {
  return (
    <Flex flexDirection="column" w="100%" alignItems={['baseline', 'center']}>
      <Heading size="md" color="gray">
        Scheduled Time
      </Heading>
      <HStack flexDirection="row" spacing={2}>
        {/* need to account for locale time */}
        <Text>Reques for {new Date(date).toDateString()}</Text>
        <Text>
          Between {convertTime(sTime)} and {convertTime(eTime)}
        </Text>
      </HStack>
    </Flex>
  );
};
