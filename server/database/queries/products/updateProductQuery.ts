import { Product } from '../../../models';

const updateProductQuery = ({ id, title, description }) => Product.update({
  title,
  description,
}, {
  where: {
    id,
    deletedAt: null,
  },
});

export default updateProductQuery;
