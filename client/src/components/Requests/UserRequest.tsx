import { FC, useState, useEffect } from 'react';
import {
  Box, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { formatDistance, parseISO } from 'date-fns';
import { Image, Button } from '../index';
import { IUserRequest } from '../../interfaces';

const UserRequestCard
: FC<{ request: IUserRequest, fetch: () => void }> = ({ request, fetch }) => {
  const [requestObj, setRequestObj] = useState<IUserRequest | null>(null);

  const states = {
    pending: 'pending',
    fail: 'fail',
    success: 'success',
  };

  useEffect(() => {
    setRequestObj(request);
  }, [request]);

  const handleDelete = async () => {
    try {
      const alert = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#1b4b66',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });

      if (alert.isConfirmed) {
        await axios.delete(`/api/v1/requests/${request.id}`);
        fetch();
      }
    } catch (error) {
      Swal.fire(error.response.data.message);
    }
  };

  if (!requestObj) return <p />;
  return (
    <Box className="request-card">
      <Image attributes={{
        src: request['productId.gallery'][0],
        alt: `an image of ${request['productId.title']}`,
        className: 'request-img',
      }}
      />
      <Box className="request-details">
        <h3
          className="request-title"
          id="title"
        >
          {requestObj['productId.title']}
        </h3>
        <p
          className="request-description"
          id="description"
        >
          {requestObj['productId.title']}
        </p>
        <Link to={`/product/${requestObj.id}/details`}>View details</Link>
        <Typography
            // eslint-disable-next-line max-len
          className={`${states[requestObj.status as keyof typeof states]} status `}
        >
          {requestObj.status}
        </Typography>
        <Typography>
          { formatDistance(
            parseISO(requestObj.createdAt),
            new Date(),
            { addSuffix: true },
          )}
        </Typography>
        <Box className="buttons">
          <Button
            style={{
              text: 'Edit',
            }}
          />
          <Button
            style={{
              text: 'Cancel',
              handleClick: handleDelete,
            }}
          />

        </Box>
      </Box>
    </Box>

  );
};

export default UserRequestCard;
