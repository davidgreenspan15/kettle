var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Button, Flex, Heading, Input } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { signup } from '../requests/user';
const SignupPage = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [golferUsername, setGolferUsername] = React.useState('');
    const [golferPassword, setGolferPassword] = React.useState('');
    const history = useHistory();
    const handleSignup = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield signup({
                username,
                password,
                golferUsername,
                golferPassword,
            });
            if (user) {
                localStorage.setItem('tee-time-user-id', user.id);
                history.push('/teeTimes');
            }
        }
        catch (err) {
            console.log(err);
        }
    });
    return (React.createElement(Flex, { flexDirection: "row", w: "100%" },
        React.createElement(Flex, { flexDirection: "column", w: "100%" },
            React.createElement(Heading, { fontFamily: 'Poppins,sans-serif' }, "Signup"),
            React.createElement(Input, { placeholder: "username", required: true, onChange: e => setUsername(e.target.value.toLowerCase()) }),
            React.createElement(Input, { placeholder: "password", required: true, onChange: e => setPassword(e.target.value), type: "password" }),
            React.createElement(Input, { placeholder: "golferUsername", required: true, onChange: e => setGolferUsername(e.target.value.toLowerCase()) }),
            React.createElement(Input, { placeholder: "golferPassword", required: true, onChange: e => setGolferPassword(e.target.value), type: "password" }),
            React.createElement(Flex, { flexDirection: "row" },
                React.createElement(Button, { onClick: () => handleSignup() }, "Signup"),
                React.createElement(Button, { onClick: () => history.push('/login') }, "Go To Login Page")))));
};
export default SignupPage;
//# sourceMappingURL=SignnupPage.js.map