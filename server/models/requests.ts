import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Request = sequelize.define('Request', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  status: {
    type: DataTypes.ENUM,
    values: ['pending', 'success', 'fail'],
    allowNull: false,
  },
  isexchangable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  senderApproval: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: null,
  },
  receiverApproval: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: null,
  },
  products: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: false,
  },
});

export default Request;
