import { DataTypes } from "sequelize";
import sequelize  from "../database/connection";

const Feedback = sequelize.define('feedback', {
    nickname : {
        type : DataTypes.STRING(50),
        allowNull: false
    },
    message : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Feedback;