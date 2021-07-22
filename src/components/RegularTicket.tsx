import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import { courses } from '../config/courseDB';
import { Ticket } from '../types/user';

const RegularTicket: React.FC<{ t: Ticket }> = ({ t }) => {
  const getNames = (t: Ticket) => {
    return (
      <Flex flexDirection="column" flexGrow={1}>
        <Heading size="md" color="gray">
          Courses
        </Heading>
        {courses.map((c, idx) => {
          return (
            t.courses.includes(c.CourseID) && (
              <Heading size="md" key={idx}>
                {c.CourseName.replace(' Golf Course', '')}
              </Heading>
            )
          );
        })}
      </Flex>
    );
  };

  const convertTime = (time: string) => {
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

  return (
    <>
      <Flex
        flexDirection="row"
        alignItems="end"
        justifyContent="space-between"
        w="100%"
        flexWrap="wrap"
      >
        {getNames(t)}
        <TicketLabel title="Date" value={t.date} />
        <TicketLabel
          title="Time"
          value={`${convertTime(t.startTime)} - ${convertTime(t.endTime)}`}
        />
        <TicketLabel title="Players" value={`${t.max}`} />

        <TicketLabel title="Status" value={t.status} />
      </Flex>
    </>
  );
};
export default RegularTicket;

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
