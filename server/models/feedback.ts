import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/connection';
import { IFeedback } from '../interfaces/models';

const Feedback = sequelize.define<Model<IFeedback>>('Feedback', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nickname: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Feedback;
