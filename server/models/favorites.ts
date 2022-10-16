import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Favorite = sequelize.define('Favorite', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

export default Favorite;
