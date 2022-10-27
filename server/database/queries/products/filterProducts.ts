import { Op } from 'sequelize';
import { Product } from '../../../models';

const filterProducts = (categoryId: number[]) => Product.findAll({
  where: {
    // category_id: {
    //   [Op.or]: categoryId,
    // },
  },
});

export default filterProducts;
