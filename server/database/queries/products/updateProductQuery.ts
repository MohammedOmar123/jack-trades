import { Product } from '../../../models';

const updateProductQuery = ({ id, title, description }) => Product.update({
  title,
  description,
}, {
  where: { id },
});

export default updateProductQuery;
