import { Product } from '../../../models';

const deleteProductQuery = async (id:string) => Product.destroy({
  where: { id },
});

export default deleteProductQuery;
