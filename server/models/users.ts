import { DataTypes } from "sequelize";
import  sequelize  from "../database/connection";

const Users = sequelize.define('users', {
    firstName : {
        type : DataTypes.STRING(20),
        allowNull: false
    },
    lastName : {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    password : {
        type: DataTypes.STRING,
        allowNull: true
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

export default Users;