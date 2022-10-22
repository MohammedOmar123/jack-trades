import { IUserInfo } from '../../../interfaces';
import { User } from '../../../models';

const checkUserExist = async (email:string) => User.findOne({
  where: { email },
});
const signupQuery = async ({
  firstName, lastName, email, password,
}:IUserInfo) => User.create({
  first_name: firstName,
  last_name: lastName,
  email,
  password,
});

export { signupQuery, checkUserExist };
