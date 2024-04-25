const express = require('express');
const bodyParser = require('body-parser');
const priceRoute = require('./src/routes/price.route');
const swaggerDocs = require('./src/utils/swagger');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/price', priceRoute);

swaggerDocs(app);

app.get('/', (req, res) => {
  res.json('Hello World');
});

const startServer = async () => {
  await new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
      resolve(server);
    });
  });
};

startServer();

module.exports = app; 
