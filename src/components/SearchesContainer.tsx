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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';

import { Ticket } from '../types/user';

const SearchesContainer: React.FC<{ t: Ticket }> = ({ t }) => {
  const moreThan600 = useMediaQuery('(min-width: 680px)');
  return (
    <Flex flexDirection="column" px={['0px', '25px']} pt="10px">
      <Accordion allowToggle px={['0px', '16px']}>
        <AccordionItem>
          <AccordionButton>
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
            >
              <Heading size="xs">Searches</Heading>
              <Heading size="xs">{t.searches?.length ?? 0}</Heading>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th fontSize={['8px', '12px']}>Time</Th>
                  <Th fontSize={['8px', '12px']}>Status</Th>
                  <Th fontSize={['8px', '12px']}>Comments</Th>
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
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default SearchesContainer;
