import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
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
  useEffect(() => {
    axios.get('/api/v1/account/').then((response) => {
      if (response.status === 200) {
        setUserId(response.data);
      }
    }).catch((error) => {
      if (error.response.status !== 401) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    });
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};
