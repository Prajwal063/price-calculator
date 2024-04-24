const { Pool } = require('pg');

exports.pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Products',
  password: 'Pra@1234$',
  port: 5432,
});


const { Sequelize } = require('sequelize');

exports.sequelize = new Sequelize('Products', 'postgres', 'Pra@1234$', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});
