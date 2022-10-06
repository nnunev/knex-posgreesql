const cityDAO = require('../dao/city');

class CityService {
  createCity(cityDto) {
    const { city, country_id } = cityDto;
    return cityDAO.createCity(city, country_id);
  }
  updateCity(cityDto) {
    const { city, country_id }  = cityDto;
    return cityDAO.updateCity(city, country_id);
  }
  
}

module.exports = new CityService();
