import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext<boolean>(false);

interface IChildrenProps {
  children : React.ReactNode
}
export const AuthContextProvider = ({ children } : IChildrenProps) => {
  const [auth, setIsAuth] = useState(false);
  const checkAuth = async () => {
    try {
      const response = await axios.get('/api/v1/account/');
      if (response.status === 200) {
        setIsAuth(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};
