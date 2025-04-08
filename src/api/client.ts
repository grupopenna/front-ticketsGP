import axios from 'axios';
export const BACK_URL = import.meta.env.VITE_BACK_URL;

export const clientHttp = axios.create({ baseURL: `${BACK_URL}` });

clientHttp.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = `Bearer ${token}`;
    }
    return config;
  }
);