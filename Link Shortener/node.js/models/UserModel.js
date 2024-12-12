import link_shortner from "../database/link_shortener_db.js"; // database import
import { DataTypes } from "sequelize"; // sequelize import

const UserModel = link_shortner.define('Users', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false
});

// User model Export
export default UserModel;
