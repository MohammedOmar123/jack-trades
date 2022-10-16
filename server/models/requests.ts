import { DataTypes } from "sequelize";import sequelize from "../database/connection";

const Request = sequelize.define("Request", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  reciever_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sender_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    values: ["pending", "success", "fail"],
    allowNull: false,
  },
  isexchangable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  exchanged_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sender_approval: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: null,
  },
  receiver_approval: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: null,
  },
  products: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Request.belongsTo(Product);
