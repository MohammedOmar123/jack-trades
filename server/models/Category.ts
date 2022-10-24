import DataTypes, { Model } from 'sequelize';
import sequelize from '../database/connection';
import { ICategory } from '../interfaces/models';

const Category = sequelize.define<Model<ICategory>>('Category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
export default Category;
