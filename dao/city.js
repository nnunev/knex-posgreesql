const db = require('../db/db');

class CityDAO {
  async createCity(city, country_id) {
    const [id] = await db(`${req.params.schemaName}.city`)
      .insert({
        city: city,
        country_id: country_id,
      })
      .returning('id');

    return id;
  }

  async updateCity(city, country_id) {
    const [id] = await db(`${req.params.schemaName}.city`).where("id", id)
      .update({
        city: city,
        country_id: country_id,
      })
      .returning('id');

    return id;
  }
}

module.exports = new CityDAO();
