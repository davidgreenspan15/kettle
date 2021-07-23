var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
let baseUrl = process.env.REACT_APP_LOCAL === 'True'
    ? 'http://localhost:8000'
    : 'https://kettle-pot.herokuapp.com';
export const createTicket = (body) => __awaiter(void 0, void 0, void 0, function* () {
    let myHeaders = new Headers();
    try {
        const ticket = yield axios.post(`${baseUrl}/tickets`, Object.assign({}, body), { method: 'POST', headers: myHeaders });
        return ticket.data;
    }
    catch (err) {
        console.log(err);
    }
});
export const getMyTickets = (uuid) => __awaiter(void 0, void 0, void 0, function* () {
    let myHeaders = new Headers();
    try {
        const ticket = yield axios.post(`${baseUrl}/tickets/${uuid}/`, {}, { method: 'POST', headers: myHeaders });
        return ticket.data;
    }
    catch (err) {
        console.log(err);
    }
});
export const cancelTicket = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let myHeaders = new Headers();
    try {
        const ticket = yield axios.post(`${baseUrl}/tickets/${id}/cancel`, {}, { method: 'POST', headers: myHeaders });
        return ticket.data;
    }
    catch (err) {
        console.log(err);
    }
});
//# sourceMappingURL=ticket.js.map