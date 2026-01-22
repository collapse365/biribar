
import React, { createContext, useContext, useState, useEffect } from 'react';
import { CMSContent, AuthState } from './types';
import { INITIAL_CMS_CONTENT } from './constants';

interface CMSContextType {
  content: CMSContent;
  auth: AuthState;
  updateContent: (newContent: CMSContent) => void;
  login: (password: string) => boolean;
  logout: () => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<CMSContent>(() => {
    const saved = localStorage.getItem('biribar_content');
    return saved ? JSON.parse(saved) : INITIAL_CMS_CONTENT;
  });

  const [auth, setAuth] = useState<AuthState>(() => {
    const savedAuth = localStorage.getItem('biribar_auth');
    return savedAuth ? JSON.parse(savedAuth) : { isLoggedIn: false, user: null };
  });

  useEffect(() => {
    localStorage.setItem('biribar_content', JSON.stringify(content));
  }, [content]);

  useEffect(() => {
    localStorage.setItem('biribar_auth', JSON.stringify(auth));
  }, [auth]);

  const updateContent = (newContent: CMSContent) => {
    setContent(newContent);
  };

  const login = (password: string): boolean => {
    // In a real app, this would be a secure backend call. 
    // For this demo, we use 'admin123' as the password.
    if (password === 'admin123') {
      setAuth({ isLoggedIn: true, user: 'Administrador' });
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuth({ isLoggedIn: false, user: null });
  };

  return (
    <CMSContext.Provider value={{ content, auth, updateContent, login, logout }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) throw new Error('useCMS must be used within a CMSProvider');
  return context;
};
