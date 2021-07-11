import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BookTeeTime from './pages/BookTeeTime';
import SignupPage from './pages/SignnupPage';

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
