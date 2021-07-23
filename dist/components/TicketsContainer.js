var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Stack, Text, Button } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';
import { cancelTicket } from '../requests/ticket';
import CompletedTicket from './CompletedTicket';
import RegularTicket from './RegularTicket';
import SearchesContainer from './SearchesContainer';
const TicketsContainer = ({ tickets, setTickets }) => {
    const handleCancel = (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const ticket = yield cancelTicket(id);
            console.log(ticket);
            if (ticket) {
                let newTickets = [];
                tickets === null || tickets === void 0 ? void 0 : tickets.forEach(t => {
                    if (t.id === ticket.id) {
                        newTickets.push(ticket);
                    }
                    else {
                        newTickets.push(t);
                    }
                });
                setTickets(newTickets !== null && newTickets !== void 0 ? newTickets : []);
            }
            console.log(tickets);
        }
        catch (err) {
            console.log(err);
        }
    });
    return (React.createElement(Stack, { flexDirection: "column", spacing: 4, m: 0, w: "100%" }, tickets === null || tickets === void 0 ? void 0 : tickets.map((t, idx) => {
        return (React.createElement(Stack, { flexDirection: "column", spacing: 4, key: idx, boxShadow: '-1px 0px 9px 3px lightgrey', w: "100%", pt: ['10px', '20px'], px: ['10px', '20px'], pb: ['10px', '10px'], color: "black" },
            t.status === 'complete' ? (React.createElement(CompletedTicket, { t: t })) : (React.createElement(RegularTicket, { t: t })),
            React.createElement(SearchesContainer, { t: t }),
            t.status === 'searching' && (React.createElement(Button, { background: "#aa0f0f", onClick: () => {
                    handleCancel(t.id);
                } }, "Cancel")),
            React.createElement(Text, null,
                "Created: ",
                moment(t.createdAt).format('MMMM Do YYYY, h:mm a'))));
    })));
};
export default TicketsContainer;
//# sourceMappingURL=TicketsContainer.js.map