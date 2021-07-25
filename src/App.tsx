import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BookTeeTime from './pages/BookTeeTime';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignnupPage';

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
