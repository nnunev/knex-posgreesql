const apiService = require("../service/apiService");

const apiController = {
    getAll: async (req, res, next) => {
        let apiUrl=`${req.params.schemaName}.${req.params.objectName}`
        try {
            let rows = await apiService.getAll( apiUrl= {apiUrl});
            res.json(rows);
        } catch (error) {
            next(error);
        }
        },
    getById: async (req, res, next) => {
        let apiUrl=`${req.params.schemaName}.${req.params.objectName}`
        try {
            const row = await apiService.getById(id=req.params.id, apiUrl= {apiUrl});
            res.json(row);
        } catch (error) {
            next(error);
        }
    },
        
    delete: async (req, res, next) => {
        let apiUrl=`${req.params.schemaName}.${req.params.objectName}`
        try {
            const row = await apiService.delete(id=req.params.id, apiUrl= {apiUrl});
            res.json(row);
        } catch (error) {
            next(error);
        }
    },
};
   
module.exports = apiController 