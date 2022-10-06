const express = require('express');

const apiController = require('../controller/apiController');
const cityController = require('../controller/cityController');

const router = express.Router();
router.get('/api/:schemaName-:objectName', apiController.getAll );
router.post('/api/:schemaName-:objectName', cityController.createCity);
router.get('/api/:schemaName-:objectName/:id', apiController.getById );
router.put('/api/:schemaName-:objectName/:id', cityController.updateCity );
router.delete('/api/:schemaName-:objectName/:id', apiController.delete );
module.exports = router;
