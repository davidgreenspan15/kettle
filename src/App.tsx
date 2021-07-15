import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BookTeeTime from './pages/BookTeeTime';
import SignupPage from './pages/SignnupPage';
import { Container } from '@chakra-ui/react';

function App() {
  return (
    <Container maxW="container.xl" background="white">
      <Switch>
        <Route path="/signup" exact={true}>
          <SignupPage />
        </Route>
        <Route path="/">
          <BookTeeTime />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
