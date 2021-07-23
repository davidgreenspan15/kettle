var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Flex, Heading, Stack, Container } from '@chakra-ui/react';
import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import BoookingForm from '../components/BookingForm';
import TicketsContainer from '../components/TicketsContainer';
import { searchTickets } from '../requests/search';
import { autoLogin } from '../requests/user';
import { getMyTickets } from '../requests/ticket';
const BookTeeTime = () => {
    const [user, setUser] = React.useState();
    const [tickets, setTickets] = React.useState([]);
    const id = localStorage.getItem('tee-time-user-id');
    const history = useHistory();
    React.useEffect(() => {
        if (!id) {
            history.push('/login');
        }
        else {
            hanldeAutoLogin();
        }
    }, [id]);
    const hanldeAutoLogin = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield autoLogin(id);
            setUser(user);
            if (user && user.tickets) {
                const tickets = yield getMyTickets(user.id);
                if (tickets)
                    setTickets(tickets);
            }
        }
        catch (err) {
            console.log(err);
        }
    });
    const handleSearch = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = searchTickets();
            console.log(response);
        }
        catch (err) {
            console.log(err);
        }
    });
    return (React.createElement(Flex, { flexDirection: "column", w: "100%", p: ['0px', '10px'], maxW: "", h: "100%" },
        React.createElement(Button, { onClick: () => {
                localStorage.removeItem('tee-time-user-id');
                history.push('/signup');
            } }, "Logout"),
        user && user.isAdmin && (React.createElement(Button, { onClick: () => {
                handleSearch();
            } }, "Run Search")),
        user ? (React.createElement(Stack, { flexDirection: "column", spacing: 2, w: '100%', alignItems: "center" },
            React.createElement(BoookingForm, { user: user, tickets: tickets, setTickets: setTickets }),
            React.createElement(Container, { maxW: "container.xl", background: "white" },
                React.createElement(TicketsContainer, { tickets: tickets, setTickets: setTickets })))) : (React.createElement(Heading, null, "No User Error"))));
};
export default BookTeeTime;
//# sourceMappingURL=BookTeeTime.js.map