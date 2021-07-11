import { Button, Flex, Heading, Input } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { login, signup } from '../requests/user';

const SignupPage: React.FC<{}> = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const history = useHistory();
  const handleSignup = async () => {
    try {
      const user = await signup({ name, email });
      if (user) {
        localStorage.setItem('user-id', user.id);
        history.push('/teeTimes');
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handlelogin = async () => {
    try {
      const user = await login({ name, email });
      if (user) {
        localStorage.setItem('user-id', user.id);
      }
      history.push('/teeTimes');
    } catch (err) {
      console.log(err);
    }
  };
  // const p = { fontFami:'Poppins', 'sans-serif'}
  // font-family: 'Roboto', sans-serif;
  // font-family: 'Uchen', serif;
  return (
    <Flex flexDirection="row" w="100%">
      <Flex flexDirection="column" w="100%">
        <Heading fontFamily={'Poppins,sans-serif'}>Signup</Heading>
        <Input
          placeholder="Name"
          onChange={e => setName(e.target.value.toLowerCase())}
        />
        <Input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <Flex flexDirection="row">
          <Button onClick={() => handleSignup()}>Signup</Button>
          <Button onClick={() => handlelogin()}>Login</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignupPage;
