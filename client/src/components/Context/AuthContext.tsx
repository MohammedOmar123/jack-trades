import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { IAuthContextProps } from '../../interfaces';

export const AuthContext = createContext<IAuthContextProps>({
  userId: 0,
  setUserId: () => {},
});

interface IChildrenProps {
  children : React.ReactNode
}

export const AuthContextProvider = ({ children } : IChildrenProps) => {
  const [userId, setUserId] = useState<number>(0);
  const checkAuth = async () => {
    try {
      const response = await axios.get('/api/v1/account/');
      if (response.status === 200) {
        setUserId(response.data);
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
    <AuthContext.Provider value={{ userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};
