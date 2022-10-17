/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { IntroTypes } from '../../interfaces';

const IntroductionCard:FC< { data: IntroTypes } > = ({ data }) => (
  <div className="introCard">
    <div>
      <i className={data.icon} style={{ color: data.color }} />
      <h3>{data.title}</h3>
    </div>
    <p>
      {data.description}
    </p>
  </div>
);

export default IntroductionCard;
