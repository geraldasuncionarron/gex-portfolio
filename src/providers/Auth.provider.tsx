// AuthContext.js

import { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../utils/localstorage.utils';

type Config = {
  package: 'starter' | 'pro' | 'enterprise'
}

export const AuthContext = createContext({
    isAuthenticated: false,
    config: {
      package: ''
    },
    user: {
      access_token: ''
    },
    login: (data: { access_token: string, config: Config }) => {},
    logout: () => {},
});

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [config, setConfig] = useState<Config>({
    package: "starter"
  });

  const login = (data: { access_token: string, config: Config }) => {
    // Perform login logic
    setConfig(config)
    setUser(data);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, config, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };