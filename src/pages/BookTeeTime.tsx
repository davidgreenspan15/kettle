import { Flex, Heading, Stack, Container } from '@chakra-ui/react';
import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

import BoookingForm from '../components/BookingForm';
import TicketsContainer from '../components/TicketsContainer';
import { searchTickets } from '../requests/search';
import { autoLogin } from '../requests/user';
import { User, Ticket } from '../types/user';
import { getMyTickets } from '../requests/ticket';
const BookTeeTime: React.FC<{}> = () => {
  const [user, setUser] = React.useState<User>();
  const [tickets, setTickets] = React.useState<Ticket[]>([]);
  const id = localStorage.getItem('user-id');
  const history = useHistory();
  React.useEffect(() => {
    if (!id) {
      history.push('/signup');
    } else {
      hanldeAutoLogin();
    }
  }, [id]);

  const hanldeAutoLogin = async () => {
    try {
      const user = await autoLogin(id);
      setUser(user);
      if (user && user.tickets) {
        const tickets = await getMyTickets(user.id);
        if (tickets) setTickets(tickets);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = async () => {
    try {
      const response = searchTickets();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex flexDirection="column" w="100%" p={['0px', '10px']} maxW="" h="100%">
      {user && user.isAdmin && (
        <Button
          onClick={() => {
            handleSearch();
          }}
        >
          Run Search
        </Button>
      )}
      {user ? (
        <Stack
          flexDirection="column"
          spacing={2}
          w={'100%'}
          alignItems="center"
        >
          <BoookingForm user={user} tickets={tickets} setTickets={setTickets} />
          <Container maxW="container.xl" background="white">
            <TicketsContainer tickets={tickets} setTickets={setTickets} />
          </Container>
        </Stack>
      ) : (
        <Heading>No User Error</Heading>
      )}
    </Flex>
  );
};

export default BookTeeTime;
