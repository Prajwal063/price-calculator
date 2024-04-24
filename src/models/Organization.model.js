const { DataTypes } = require('sequelize');
const sequelize = require('../../database/connection');

const Organization = sequelize.define('Organization', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

module.exports = Organization;
