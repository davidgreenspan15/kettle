import {
  Button,
  Flex,
  Heading,
  Input,
  Container,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { signup } from '../requests/user';

const SignupPage: React.FC<{}> = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [golferUsername, setGolferUsername] = React.useState('');
  const [golferPassword, setGolferPassword] = React.useState('');
  const history = useHistory();
  const handleSignup = async () => {
    try {
      const user = await signup({
        username,
        password,
        golferUsername,
        golferPassword,
      });
      if (user) {
        localStorage.setItem('tee-time-user-id', user.id);
        history.push('/teeTimes');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxW="container.lg" background="white" p="20px">
      <Flex flexDirection="column" w="100%">
        <Heading fontFamily={'Poppins,sans-serif'} pb="30px">
          Signup
        </Heading>
        <VStack spacing="20px" p="10px">
          <Input
            placeholder="Username"
            required
            onChange={e => setUsername(e.target.value.toLowerCase())}
            autoComplete="new-password"
          />
          <Input
            placeholder="Password"
            required
            onChange={e => setPassword(e.target.value)}
            type="password"
            autoComplete="new-password"
          />
          <Input
            placeholder="Golfer Username"
            required
            onChange={e => setGolferUsername(e.target.value.toLowerCase())}
            autoComplete="new-password"
          />
          <Input
            placeholder="Golfer Password"
            required
            onChange={e => setGolferPassword(e.target.value)}
            type="password"
            autoComplete="new-password"
          />
        </VStack>
        <VStack spacing="20px" p="10px">
          <Button onClick={() => handleSignup()}>Signup</Button>
          <Button onClick={() => history.push('/login')}>
            Go To Login Page
          </Button>
        </VStack>
      </Flex>
    </Container>
  );
};

export default SignupPage;
