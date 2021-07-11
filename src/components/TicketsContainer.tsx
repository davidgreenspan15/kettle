import { Flex, Heading, Text, Stack, Box } from '@chakra-ui/react';
import React from 'react';
import { Ticket } from '../types/ticket';
import { courses } from '../config/courseDB';
import { CourseDB } from '../types/search';

const TicketsContainer: React.FC<{ tickets?: Ticket[] }> = ({ tickets }) => {
  const getNames = (t: Ticket) => {
    return (
      <Flex flexDirection="column">
        {courses.map((c, idx) => {
          return (
            t.courses.includes(c.CourseID) && (
              <Heading size="md" key={idx}>
                {c.CourseName}
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
    <Stack flexDirection="column" spacing={4} padding="10px" w="100%">
      {tickets?.map((t, idx) => {
        if (t.status === 'searching') {
          return (
            <Stack
              flexDirection="column"
              spacing={4}
              key={idx}
              boxShadow={'-1px 0px 20px 1px #c0e3c5;'}
              w="100%"
              p="20px"
              backgroundColor="white"
            >
              <Flex
                flexDirection="row"
                alignItems="end"
                justifyContent="space-between"
                w="100%"
              >
                {getNames(t)}
                <Flex
                  w="200px"
                  h="70px"
                  alignItems="center"
                  justifyContent="center"
                  backgroundColor={'rgb(238 191 0)'}
                  borderRadius={'10px'}
                >
                  <Heading size="md" color="white" textTransform="capitalize">
                    {t.status}
                  </Heading>
                </Flex>
              </Flex>
              <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                w="100%"
                px={'50px'}
              >
                <Flex flexDirection="column">
                  <TicketLabel title="Date" value={t.date} />
                  <TicketLabel
                    title="Time"
                    value={`${convertTime(t.startTime)} - ${convertTime(
                      t.endTime
                    )}`}
                  />
                </Flex>
                <Flex flexDirection="column">
                  <TicketLabel title="Players" value={`${t.max}`} />
                </Flex>
              </Flex>
            </Stack>
          );
        } else {
          return <Flex></Flex>;
        }
      })}
    </Stack>
  );
};
export default TicketsContainer;

const TicketLabel: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => {
  return (
    <Stack flexDirection="row" alignItems="baseline" spacing={4} w="100%">
      <Heading size="sm">{title}</Heading>
      <Text pl="20px">{value}</Text>
    </Stack>
  );
};
