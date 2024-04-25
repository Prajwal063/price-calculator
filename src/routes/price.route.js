const express  = require('express');
const validate = require( '../middleware/validate' );
const { calculatePrice } = require( '../controller/price.controller');
const { getPriceType } = require('../types/schema');
const router = express.Router();

/**
 * @openapi: 3.0.0
 * '/price/calculate':
 *   post:
 *     tags:
 *       - Price
 *     summary: Calculate Price
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               zone:
 *                 type: string
 *                 description: The zone for delivery.
 *               organization_id:
 *                 type: integer
 *                 description: The ID of the organization.
 *               total_distance:
 *                 type: number
 *                 description: The total distance for delivery.
 *               item_type:
 *                 type: string
 *                 description: The type of item.
 *             example:
 *               zone: "Zone 1"
 *               organization_id: 2
 *               total_distance: 12
 *               item_type: "perishable"
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_price:
 *                   type: number
 *                   description: The calculated total price.
 *             example:
 *               total_price: 20.5
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequestResponse'
 */


router
    .route('/calculate')
    .post(validate(getPriceType), calculatePrice);

module.exports = router