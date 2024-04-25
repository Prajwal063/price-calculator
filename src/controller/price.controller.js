const {pool} = require("../../connection")
exports.calculatePrice = async (req, res) => {
  try {
    const { zone, organization_id, total_distance, item_type } = req.body;

    const query = `
      SELECT base_distance_in_km, km_price, fix_price
      FROM pricing
      INNER JOIN item ON pricing.item_id = item.id
      WHERE pricing.organization_id = $1
        AND pricing.zone = $2
        AND item.type = $3
    `;
    const result = await pool.query(query, [organization_id, zone, item_type]);
    const pricing = result.rows[0];

    let totalPrice = pricing.fix_price;
    if (total_distance > pricing.base_distance_in_km) {
      totalPrice += (total_distance - pricing.base_distance_in_km) * pricing.km_price;
    }

    res.json({ total_price: totalPrice });

  } catch (error) {
    console.error('Error calculating price:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
