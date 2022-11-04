import { Request } from '../../../models';
// this query to check if the request still exist
const checkRequestQuery = (id:number, receiver_id:number) => Request.findOne({
  attributes: ['id', 'products'],
  where: {
    id,
    receiver_id,
  },
});
export default checkRequestQuery;
