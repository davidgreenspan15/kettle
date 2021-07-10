import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import BoookingForm from '../components/BookingForm';
import { Redirect, useHistory } from 'react-router-dom';
import { autoLogin } from '../requests/user';
import { User } from '../types/user';
import { Button } from '@material-ui/core';
import { searchTickets } from '../requests/search';
import TicketsContainer from '../components/TicketsContainer';
import { getMyTickets } from '../requests/ticket';
import { Ticket } from '../types/ticket';

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
        setTickets(user?.tickets);
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
    <Flex flexDirection="row" w="100%">
      <Flex flexDirection="column" w="100%" p="10px">
        <Button
          onClick={() => {
            handleSearch();
          }}
        >
          Run Search
        </Button>
        {user ? (
          <Flex flexDirection="column">
            <BoookingForm
              user={user}
              tickets={tickets}
              setTickets={setTickets}
            />
            <TicketsContainer tickets={tickets} />
          </Flex>
        ) : (
          <Heading>No User Error</Heading>
        )}
      </Flex>
    </Flex>
  );
};

export default BookTeeTime;
