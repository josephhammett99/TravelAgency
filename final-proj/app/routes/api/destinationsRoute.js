const daoClass = require('../../dao/destinationsDao');
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
router.get('/destinations', (req, res) => { 
    dao.findByDestination(req, res, req.params.destinations);
});

/*router.post('/post', (req, res) => {
    console.log(req.body);
    //res.json(req.body);
    dao.updateById(req, res);
});*/
module.exports = router;