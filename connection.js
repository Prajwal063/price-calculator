const { Pool } = require('pg');

const path = require('path')

require('dotenv').config({ path: './.env' })

exports.pool = new Pool({
  connectionString: process.env.DB_EXTERNAL
})

const { Sequelize } = require('sequelize');

exports.sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT,
});

