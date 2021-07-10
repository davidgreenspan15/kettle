import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Flex } from '@chakra-ui/react';
import BookTeeTime from './pages/BookTeeTime';
import SignupPage from './pages/SignnupPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/signup" exact={true}>
        <SignupPage />
      </Route>
      <Route path="/teetimes" exact={true}>
        <BookTeeTime />
      </Route>
    </Switch>
  );
}

export default App;
