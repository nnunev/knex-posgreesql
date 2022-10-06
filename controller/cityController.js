const cityService = require('../service/cityService');

class CityController {
  async createCity(req, res) {
    try {
      const id = await cityService.createCity(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
  
  async updateCity(req,res) {
    try {
      const id = await cityService.updateCity(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new CityController();
