import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BookTeeTime from './pages/BookTeeTime';
import SignupPage from './pages/SignnupPage';

import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Switch>
      <Route path="/signup" exact={true}>
        <SignupPage />
      </Route>
      <Route path="/login" exact={true}>
        <LoginPage />
      </Route>
      <Route path="/">
        <BookTeeTime />
      </Route>
    </Switch>
  );
}

export default App;
