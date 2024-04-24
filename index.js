const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const priceRoute = require('./src/routes/price.route');
const swaggerDocs = require('./src/utils/swagger');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Products',
  password: 'Pra@1234$',
  port: 5432,
});

app.use(bodyParser.json());

app.use('/price', priceRoute)

swaggerDocs(app)

app.get('/', (req, res) => {
  res.json('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
