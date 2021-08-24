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

import { login } from '../requests/user';

const LoginPage: React.FC<{}> = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

  const handlelogin = async () => {
    try {
      const user = await login({ username, password });
      if (user) {
        localStorage.setItem('tee-time-user-id', user.id);
      }
      history.push('/teeTimes');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container
      maxW="container.lg"
      background="white"
      p="20px"
      alignItems="center"
    >
      <Flex flexDirection="column" w="100%">
        <Heading fontFamily={'Poppins,sans-serif'} pb="30px">
          Login
        </Heading>
        <VStack spacing="20px" p="10px">
          <Input
            placeholder="Username"
            required
            onChange={e => setUsername(e.target.value.toLowerCase())}
          />
          <Input
            placeholder="Password"
            required
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </VStack>

        <VStack spacing="20px" p="10px">
          <Button onClick={() => handlelogin()}>Login</Button>

          <Button onClick={() => history.push('/signup')}>
            Go To Signup Page
          </Button>
        </VStack>
      </Flex>
    </Container>
  );
};

export default LoginPage;
