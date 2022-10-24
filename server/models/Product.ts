import DataTypes, { Model } from 'sequelize';
import sequelize from '../database/connection';
import { IProduct } from '../interfaces/models';

const Product = sequelize.define<Model<IProduct>>('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  gallery: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  is_available: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('donation', 'exchange'),
    allowNull: false,
  },

});

export default Product;
