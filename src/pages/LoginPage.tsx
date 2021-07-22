import { Button, Flex, Heading, Input } from '@chakra-ui/react';
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
    <Flex flexDirection="row" w="100%">
      <Flex flexDirection="column" w="100%">
        <Heading fontFamily={'Poppins,sans-serif'}>Login</Heading>
        <Input
          placeholder="username"
          required
          onChange={e => setUsername(e.target.value.toLowerCase())}
        />
        <Input
          placeholder="password"
          required
          onChange={e => setPassword(e.target.value)}
          type="password"
        />

        <Flex flexDirection="row">
          <Button onClick={() => history.push('/signup')}>
            Go To Signup Page
          </Button>
          <Button onClick={() => handlelogin()}>Login</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
