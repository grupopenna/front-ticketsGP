import axios from 'axios';
const AUTH_URL = import.meta.env.VITE_AUTH_URL;

const clientHttp = axios.create({ baseURL: AUTH_URL });

clientHttp.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = `Bearer ${token}`;
    }
    return config;
  }
);

export const login = async (email: string, password: string) => {
  try {
    const response = await clientHttp.post('auth/v2/authentication/login', {
      term: email,
      password,
    });
    const { data } = response;
    localStorage.setItem('token', data?.token);
    localStorage.setItem('userData', JSON.stringify(data.data));
    return data;
  } catch (error) {
    console.error("auth - Login failed:", error);
    throw error;
  }
}

export const checkToken = async () => {
  try {
    const res = await clientHttp.get('auth/v2/authentication/check-token');
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.error({ error });
    throw error
  }
}