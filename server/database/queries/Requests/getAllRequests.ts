import { Request } from '../../../models';

const getAllRequestsQuery = (sender_id:number) => Request.findAll({
  attributes: ['id', 'status', 'receiver_approval', 'products', 'createdAt', 'receiver_id', 'product_id', 'exchanged_id'],
  where: {
    sender_id,
  },
});

export default getAllRequestsQuery;
