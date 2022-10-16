import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Favorite = sequelize.define('Favorite', {
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Favorite;
