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
export const signup = (body) => __awaiter(void 0, void 0, void 0, function* () {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    try {
        const user = yield axios.post(`${baseUrl}/users`, Object.assign({}, body), { method: 'POST', headers: myHeaders });
        return user.data;
    }
    catch (err) {
        console.log(err);
    }
});
export const login = (body) => __awaiter(void 0, void 0, void 0, function* () {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    try {
        const user = yield axios.post(`${baseUrl}/login`, Object.assign({}, body), { method: 'POST', headers: myHeaders });
        return user.data;
    }
    catch (err) {
        console.log(err);
    }
});
export const autoLogin = (body) => __awaiter(void 0, void 0, void 0, function* () {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    try {
        const user = yield axios.post(`${baseUrl}/autoLogin`, { id: body }, { method: 'POST', headers: myHeaders });
        return user.data;
    }
    catch (err) {
        console.log(err);
    }
});
//# sourceMappingURL=user.js.map