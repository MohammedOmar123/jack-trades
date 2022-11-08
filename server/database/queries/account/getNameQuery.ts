import { User } from '../../../models';

const getNameQuery = (id:number) => User.findOne({
  attributes: ['first_name', 'last_name'],
  where: {
    id,
  },
});

export default getNameQuery;
