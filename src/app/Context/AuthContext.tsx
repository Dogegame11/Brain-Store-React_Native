import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  name: string;
  phone: string;
  email?: string;
  bonusUP: number;
}

interface AuthContextType {
  user: User | null;
  login: (name: string, phone: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (name: string, phone: string) => {
    setUser({ name, phone, bonusUP: 150 });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};