import {
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useMediaQuery,
} from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';

import { Ticket } from '../types/user';

const SearchesContainer: React.FC<{ t: Ticket }> = ({ t }) => {
  const moreThan600 = useMediaQuery('(min-width: 680px)');
  return (
    <Flex flexDirection="column" px={['0px', '25px']} pt="10px">
      <Heading size="xs">Searches</Heading>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Time</Th>
            <Th>Status</Th>
            <Th>Comments</Th>
          </Tr>
        </Thead>
        {t?.searches?.map((s, idx) => {
          return (
            <Tbody key={idx}>
              <Tr>
                <Td fontSize={['10px', '12px', '14px']} py={[0, '5px']}>
                  {moreThan600[0]
                    ? moment(s.createdAt).format('MMMM Do YYYY, h:mm a')
                    : moment(s.createdAt).format('MM/DD/YY, h:mm a')}
                </Td>
                <Td py={[0, '5px']} fontSize={['10px', '12px', '14px']}>
                  {s.status}
                </Td>
                <Td py={[0, '5px']} fontSize={['10px', '12px', '14px']}>
                  {s.comments}
                </Td>
              </Tr>
            </Tbody>
          );
        })}
      </Table>
    </Flex>
  );
};

export default SearchesContainer;
