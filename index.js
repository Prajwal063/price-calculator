const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const { getPriceType } = require('./src/types/schema');
const validate = require('./src/middleware/validate');
const { calculatePrice } = require('./src/controller/price.controller');
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

// app.post('/calculate-price', validate(getPriceType), async (req, res) => {
//   try {
//     const { zone, organization_id, total_distance, item_type } = req.body;

//     const query = `
//       SELECT base_distance_in_km, km_price, fix_price
//       FROM pricing
//       INNER JOIN item ON pricing.item_id = item.id
//       WHERE pricing.organization_id = $1
//         AND pricing.zone = $2
//         AND item.type = $3
//     `;
//     const result = await pool.query(query, [organization_id, zone, item_type]);
//     const pricing = result.rows[0];

//     let totalPrice = pricing.fix_price;
//     if (total_distance > pricing.base_distance_in_km) {
//       totalPrice += (total_distance - pricing.base_distance_in_km) * pricing.km_price;
//     }

//     res.json({ total_price: totalPrice });
//     // console.log(totalPrice);

//   } catch (error) {
//     console.error('Error calculating price:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.use('/calculate-price', calculatePrice);

app.use('/price', priceRoute)

swaggerDocs(app)

app.get('/', (req, res) => {
  res.json('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
