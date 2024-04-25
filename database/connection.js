const { Pool } = require('pg');

const path = require('path')

require('dotenv').config({
  override: true,
  path: path.join(__dirname, '.env')
})

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


// exports.pool = new Pool({
//   user: 'prcing_user',
//   host: 'dpg-coks9uud3nmc739koj30-a',
//   database: 'prcing',
//   password: 'qjpAv9yQhofexvrMJbBoonUPBTxoR07C',
//   port: 5432,
// });


// const { Sequelize } = require('sequelize');

// exports.sequelize = new Sequelize('prcing', 'prcing_user', 'qjpAv9yQhofexvrMJbBoonUPBTxoR07C', {
//   host: 'dpg-coks9uud3nmc739koj30-a',
//   dialect: 'prcing_user',
//   port: 5432,
// });

