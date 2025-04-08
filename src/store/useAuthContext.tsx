import { create } from "zustand"
import { checkToken, login } from "../api/auth/auth"

interface User {
  userId: number
  fullName: string | null
  email: string
  dni: string
  company: string
  roles: any
  jiraAccountId: string
  jefeArea: string | null
};

interface AuthState {
  user: User | null;
  token: string | null,
  status: 'checking' | 'authenticated' | 'not-authenticated';
  login: (email: string, password: string) => Promise<void>;
  logOut: () => void;
  checkToken: () => void;
}

export const useAuthContext = create<AuthState>((set) => ({
  user: null,
  token: null,
  status: 'checking',

  login: async (email: string, password: string) => {
    try {
      const user = await login(email, password);
      console.log(user);
      
      if (user){
        set({ user: user.data, token: user.token, status: 'authenticated' });
      }
    } catch (error:any) {
      set({ user: null });
      console.log('useAuthContext login',error);
      
      throw error.response.data;
    }
  },
  logOut: () => {
    set({ user: null, status: 'not-authenticated' });
  },
  checkToken: async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) return set({ status: 'not-authenticated' });

      const res = await checkToken();

      if (res.token !== null) set({ user: res.data, token: res.token, status: 'authenticated' });

    } catch (error) {
        console.log({ error });
        set({ user: null, status: 'not-authenticated' });
        throw error
    }
  }
}))