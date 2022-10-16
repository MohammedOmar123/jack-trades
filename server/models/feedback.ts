import { DataTypes } from "sequelize";
import sequelize  from "../database/connection";

const Feedback = sequelize.define('feedback', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nickname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Feedback;