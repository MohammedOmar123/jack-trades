import { Request, Response } from 'express';
import { getDonationsQuery, getExchangesQuery, getContributionsQuery } from '../../database/queries';

const getStatistics = async (req : Request, res : Response) => {
  try {
    const response = await Promise.all(
      [getDonationsQuery(), getExchangesQuery(), getContributionsQuery(),
      ],
    );
    const donateTimes = response[0].length;
    const exchangeTimes = response[1].length;
    const contributeTimes = response[2].length;

    res.status(200).json({ donateTimes, exchangeTimes, contributeTimes });
  } catch (error) {
    res.status(500).json({ error: error.msg });
  }
};

export default getStatistics;
