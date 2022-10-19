import { Product } from '../../../models';

const getProductQuery = async (id : string) => Product.findOne({
  where: { id },
  attributes: ['id', 'title', 'description', 'gallery', 'type', ['createdAt', 'created_at']],
});

export default getProductQuery;
