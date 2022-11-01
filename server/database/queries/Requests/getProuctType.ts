import { Op } from 'sequelize';
import { Product } from '../../../models';

const getProductDetailsQuery = (ids:number[]) => Product.findOne({
  attributes: ['user_id', 'type', 'is_available'],
  where: {
    id: {
      [Op.in]: ids,
    },
  },
});

export default getProductDetailsQuery;
