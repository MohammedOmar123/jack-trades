import { Product } from '../../../models';

const deleteProductQuery = async (id:string) => Product.destroy({
  where: {
    id,
    deletedAt: null,
  },
});

export default deleteProductQuery;
