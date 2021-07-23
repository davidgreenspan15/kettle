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
export const searchTickets = () => __awaiter(void 0, void 0, void 0, function* () {
    let myHeaders = new Headers();
    try {
        const resp = yield axios.get(`${baseUrl}/search`, { method: 'GET' });
        return resp.data;
    }
    catch (err) {
        console.log(err);
    }
});
//# sourceMappingURL=search.js.map