import link_shortner from "../database/link_shortener_db.js"; // database import
import { DataTypes } from "sequelize"; // sequelize import

/**
 *  Url model
 */
const UrlModel = link_shortner.define('URLs', {
  url_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Auto-increment for unique URL identifiers
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true, // Allows URLs without associated users
    references: {
      model: 'Users', // Name of the related table
      key: 'user_id'  // Primary key in the Users table
    },
    onDelete: 'CASCADE' // Deletes URLs if the associated user is removed
  },
  long_url: {
    type: DataTypes.TEXT,
    allowNull: false // The long URL is mandatory
  },
  short_url: {
    type: DataTypes.STRING(50),
    allowNull: false, // Short URL is required
    unique: true // Ensures no duplicate short URLs
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW // Automatically sets the creation date
  },
  expiration_date: {
    type: DataTypes.DATE,
    allowNull: true // Optional expiration date for the URL
  },
  click_limit: {
    type: DataTypes.INTEGER,
    allowNull: true // Optional click limit for the URL
  },
  current_clicks: {
    type: DataTypes.INTEGER,
    defaultValue: 0 // Default number of clicks is 0
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true // URL is active by default
  },
  qr_image: {
    type: DataTypes.BLOB('long'), // Stores the QR code as binary data
    allowNull: true // QR code is optional
  }
}, {
  tableName: 'URLs', // Matches the database table name
  timestamps: false // Disables Sequelize's automatic timestamps
});

export default UrlModel; //Url model export