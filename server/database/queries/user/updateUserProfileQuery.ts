import { User } from '../../../models';

const updateUserProfileQuery = async (id:number, bio:string, image:string) => User.update({
  bio,
  image,
}, {
  where: { id },
});

export default updateUserProfileQuery;
