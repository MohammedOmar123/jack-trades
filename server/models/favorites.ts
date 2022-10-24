import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/connection';
import { IFavorite } from '../interfaces/models';

const Favorite = sequelize.define<Model<IFavorite>>('Favorite', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

export default Favorite;
