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
import { User } from '../types/user';
const EditProfile: React.FC<{ user: User }> = ({ user }) => {
  const [username, setUsername] = React.useState(user.username);
  const [password, setPassword] = React.useState('');
  const [golferUsername, setGolferUsername] = React.useState(
    user.golferUsername
  );
  const [golferPassword, setGolferPassword] = React.useState(
    user.golferPassword
  );
  const history = useHistory();
  const handleUpdate = async () => {
    if (
      username.length > 0 &&
      password.length > 0 &&
      golferUsername.length > 0 &&
      golferPassword.length > 0
    ) {
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
    } else {
      alert('Please include all fields');
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
          <Button onClick={() => history.push('/login')}>
            Go To Login Page
          </Button>
        </VStack>
      </Flex>
    </Container>
  );
};

export default EditProfile;
