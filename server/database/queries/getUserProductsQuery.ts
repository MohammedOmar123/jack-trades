/* eslint-disable max-len */
import { Product } from '../../models';

const getUserProductsQuery = async (id: string | number) => Product.findAll({ where: { user_id: id } });

export default getUserProductsQuery;
