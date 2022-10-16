import { Sequelize, DataTypes, DataType } from 'sequelize';
const sequelize = new Sequelize();

export const Category = sequelize.define('category', {
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
        allowNull:false,
    }
});