import { User } from '../../../models';

const getUserProfileQuery = (id: string | number) => User.findOne({
  where: { id },
  attributes: ['first_name', 'last_name', 'image', 'bio'],
});

export default getUserProfileQuery;
