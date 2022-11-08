import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { IAuthContextProps } from '../../interfaces';

export const AuthContext = createContext<IAuthContextProps>({
  userId: 0,
  setUserId: () => {},
  fullName: '',
});

interface IChildrenProps {
  children : React.ReactNode
}

export const AuthContextProvider = ({ children } : IChildrenProps) => {
  const [userId, setUserId] = useState<number>(0);
  const [fullName, setFullName] = useState<string>('');

  useEffect(() => {
    axios.get('/api/v1/account/').then((response) => {
      if (response.status === 200) {
        const { id, firstName, lastName } = response.data;
        setUserId(id);
        setFullName(`${firstName} ${lastName}`);
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
    <AuthContext.Provider value={{ userId, setUserId, fullName }}>
      {children}
    </AuthContext.Provider>
  );
};
