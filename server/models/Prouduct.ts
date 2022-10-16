import  DataTypes  from 'sequelize';
import sequelize from '../database/connection';

import  Category  from './Category';
import User from './users';

 const Product = sequelize.define('product', {
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
User.hasMany(Product,{foreignKey:'user_id'});
Product.belongsTo(User);

Category.hasMany(Product,{foreignKey:'category_id'});
Product.belongsTo(Category);

export default Product;