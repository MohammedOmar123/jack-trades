import  DataTypes from 'sequelize';
import sequelize from '../database/connection';
 const Category = sequelize.define('category', {
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
export default Category ;