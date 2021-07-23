import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BookTeeTime from './pages/BookTeeTime';
import SignupPage from './pages/SignnupPage';
import LoginPage from './pages/LoginPage';
function App() {
    return (React.createElement(Switch, null,
        React.createElement(Route, { path: "/signup", exact: true },
            React.createElement(SignupPage, null)),
        React.createElement(Route, { path: "/login", exact: true },
            React.createElement(LoginPage, null)),
        React.createElement(Route, { path: "/" },
            React.createElement(BookTeeTime, null))));
}
export default App;
//# sourceMappingURL=App.js.map