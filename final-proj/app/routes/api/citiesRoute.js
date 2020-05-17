const daoClass = require('../../dao/citiesDao');
const dao = new daoClass();

const express = require('express');
const router = express.Router();

// ALL RESORTS ROUTE -> /api/resorts/
/*router.get('/', (req, res) => {
    dao.findAll(req, res);
});*/

// FIND BY ID ROUTE -> /api/resorts/:id
router.get('/:id', (req, res) => {
    dao.findById(req, res, req.params.id);
});

// FIND BY LOCATION ROUTE -> /api/resorts/location/:location
router.get('/cities', (req, res) => { 
    dao.findByResort(req, res, req.params.cities);
});

/*router.post('/post', (req, res) => {
    console.log(req.body);
    //res.json(req.body);
    dao.updateById(req, res);
});*/
module.exports = router;