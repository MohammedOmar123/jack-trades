import { User } from '../../../models';

const signinQuery = ({ email, password }) => User.findOne({
  where: {
    email,
    password,
  },
});

export default signinQuery;
