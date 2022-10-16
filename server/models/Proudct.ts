import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize();
import { Category } from './Category';
// import sequelize from connection file
// here import user from user model
export const Product = sequelize.define('product', {
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
    isAvailable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('donation', 'exchange'),
        allowNull: false,
    }

})
// here create one to many relation with user model
// User.hasMany(product);
// Product.belongTo(User);

Category.hasMany(Product);
Product.belongsTo(Category);
