import { Button, Flex, Heading, Input } from '@chakra-ui/react';
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
    <Flex flexDirection="row" w="100%">
      <Flex flexDirection="column" w="100%">
        <Heading fontFamily={'Poppins,sans-serif'}>Signup</Heading>
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
        <Input
          placeholder="golferUsername"
          required
          onChange={e => setGolferUsername(e.target.value.toLowerCase())}
        />
        <Input
          placeholder="golferPassword"
          required
          onChange={e => setGolferPassword(e.target.value)}
          type="password"
        />
        <Flex flexDirection="row">
          <Button onClick={() => handleSignup()}>Signup</Button>
          <Button onClick={() => history.push('/login')}>
            Go To Login Page
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignupPage;
