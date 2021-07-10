import { User } from '../types/user';
import axios from 'axios';
export const signup = async (body: Signup) => {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  try {
    const user = await axios.post<User>(
      'http://localhost:8000/users',
      { ...body },
      { method: 'POST', headers: myHeaders }
    );
    return user.data;
  } catch (err) {
    console.log(err);
  }
};
export const login = async (body: Signup) => {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  try {
    const user = await axios.post<User>(
      'http://localhost:8000/login',
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
      'http://localhost:8000/autoLogin',
      { id: body },
      { method: 'POST', headers: myHeaders }
    );
    return user.data;
  } catch (err) {
    console.log(err);
  }
};

interface Signup {
  name: String;
  email: String;
}
