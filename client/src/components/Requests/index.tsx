/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FC, useState, useEffect, useRef,
} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import {
  Box, Typography, Pagination, Stack,
} from '@mui/material';
import UserRequestCard from './UserRequest';
import { IUserRequest } from '../../interfaces';
import './UserRequest.css';

const UserRequest: FC = () => {
  const [requests, setRequests] = useState<IUserRequest[]>([]);
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);
  const [count, setCount] = useState<number>(1);

  const pageNumber = useRef(1);

  const fetchData = async () => {
    try {
      const { data } = await axios
        .get(`/api/v1/requests/?offset=${offset}`);
      if (data.message === 'There is no requests yet') {
        setMessage(data.message);
      } else {
        setRequests(data.message.rows);
        setCount(data.message.count);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      Swal.fire(error.response.data.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    if (value > pageNumber.current) setOffset(offset + 3);
    else setOffset(offset - 3);
    pageNumber.current = value;
  };

  useEffect(() => {
    fetchData();
  }, [offset]);

  if (isLoading || !requests.length) return <h1>loading..</h1>;
  return (
    <Box className="user-requests">
      <Typography variant="h4">Requests</Typography>
      <Box className="requests">
        {message ? <p>{message}</p>
          : requests.map((e) => (
            <UserRequestCard
              request={e}
              key={e.id}
              fetch={fetchData}
            />
          ))}
      </Box>
      <Stack spacing={2}>
        <Pagination count={Math.ceil(count / 3)} onChange={handleChange} />
      </Stack>
    </Box>
  );
};

export default UserRequest;
