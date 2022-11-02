import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import { IRequest } from '../interfaces/models';

const Request = sequelize.define<IRequest>('Request', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  status: {
    type: DataTypes.ENUM,
    values: ['pending', 'success', 'fail'],
    defaultValue: 'pending',
  },
  is_exchangable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  sender_approval: {
    type: DataTypes.BOOLEAN,
    defaultValue: null,
  },
  receiver_approval: {
    type: DataTypes.BOOLEAN,
    defaultValue: null,
  },
  products: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true,
  },
}, { paranoid: true });

export default Request;
