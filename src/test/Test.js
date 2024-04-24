const request = require('supertest');
const app = require('../../index');

describe('POST /price/calculate', () => {
  test('It should respond with status 200 and the total price', async () => {
    const payload = {
      zone: "Zone 1",
      organization_id: 2,
      total_distance: 12,
      item_type: "perishable"
    };

    const response = await request(app)
      .post('/price/calculate')
      .send(payload)
      .set('Accept', 'application/json');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('total_price');
    expect(typeof response.body.total_price).toBe('number');
  });

  test('It should respond with status 400 for bad request', async () => {
    const payload = {
      // Incomplete payload or invalid values like

      // Missing or non-existent 'zone' field
      organization_id: 2,
      total_distance: 12,
      item_type: "perishable"
    };

    const response = await request(app)
      .post('/price/calculate')
      .send(payload)
      .set('Accept', 'application/json');

    expect(response.statusCode).toBe(400);
  });
});
