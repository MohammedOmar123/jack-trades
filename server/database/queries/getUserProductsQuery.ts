/* eslint-disable max-len */
import { Product } from '../../models';

const getUserProductsQuery = async (id: string) => Product.findAll({ where: { id } });

export default getUserProductsQuery;
