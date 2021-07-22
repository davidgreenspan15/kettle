import { User } from '../types/user';
import axios from 'axios';
let baseUrl =
  process.env.REACT_APP_LOCAL === 'True'
    ? 'http://localhost:8000'
    : 'https://kettle-pot.herokuapp.com';

export const signup = async (body: Signup) => {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  try {
    const user = await axios.post<User>(
      `${baseUrl}/users`,
      { ...body },
      { method: 'POST', headers: myHeaders }
    );
    return user.data;
  } catch (err) {
    console.log(err);
  }
};
export const login = async (body: Login) => {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  try {
    const user = await axios.post<User>(
      `${baseUrl}/login`,
      { ...body },
      { method: 'POST', headers: myHeaders }
    );
    return user.data;
  } catch (err) {
    console.log(err);
  }
};
export const autoLogin = async (body: string | null) => {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  try {
    const user = await axios.post<User>(
      `${baseUrl}/autoLogin`,
      { id: body },
      { method: 'POST', headers: myHeaders }
    );
    return user.data;
  } catch (err) {
    console.log(err);
  }
};

interface Signup {
  username: String;
  password: String;
  golferUsername: String;
  golferPassword: String;
}

interface Login {
  username: String;
  password: String;
}
