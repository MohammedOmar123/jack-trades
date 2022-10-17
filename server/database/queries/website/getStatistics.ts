import { Product, Request } from '../../../models';

const getDonationsQuery = async () => {
  const donateTimes = await Product.findAll({
    where: {
      type: 'donation',
    },
  });

  return donateTimes;
};

const getExchangesQuery = async () => {
  const exchangeTimes = await Request.findAll({
    where: {
      status: 'success',
    },
  });

  return exchangeTimes;
};

const getContributionsQuery = async () => {
  const contributeTimes = await Product.findAll();

  return contributeTimes;
};

export { getDonationsQuery, getExchangesQuery, getContributionsQuery };
