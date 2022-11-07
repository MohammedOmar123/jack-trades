import { Request, User, Product } from '../../../models';

const getReceiverNotificationsQuery = (receiver_id:number) => Request.findAll({
  attributes: ['id', 'status', 'receiver_approval', 'products', 'createdAt', 'sender_id', 'exchanged_id', 'deletedAt'],
  raw: true,
  nest: false,

  include: [
    {
      model: User,
      attributes: ['first_name', 'last_name', 'email'],
      required: true,
      as: 'sender',
    },
    {
      model: Product,
      attributes: ['title', 'gallery'],
      required: true,
      as: 'product',
    },
  ],

  paranoid: false,
  where: {
    receiver_id,
  },
});
export default getReceiverNotificationsQuery;
