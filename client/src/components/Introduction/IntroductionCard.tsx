/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { Typography } from '@mui/material';
import { IntroTypes } from '../../interfaces';

const IntroductionCard:FC< { data: IntroTypes } > = ({ data }) => (
  <div className="introCard">
    <div>
      <i className={data.icon} style={{ color: data.color }} />
      <Typography variant="h5">{data.title}</Typography>
    </div>
    <Typography>
      {data.description}
    </Typography>
  </div>
);

export default IntroductionCard;
