const daoClass = require('../../dao/packageDao');
const dao = new daoClass();

const express = require('express');
const router = express.Router();

// ALL RESORTS ROUTE -> /api/packages/
router.get('/', (req, res) => {
    dao.findAll(req, res);
});


router.get('/sort', (req, res) => {
    dao.findBySort(req, res);
});

// FIND BY ID ROUTE -> /api/packages/:id
router.get('/:id', (req, res) => {
    console.log('here')
    dao.findById(req, res, req.params.id);
});

// FIND BY LOCATION ROUTE -> /api/packages/location/:location
/*router.get('/packages', (req, res) => { 
    dao.findByPackage(req, res);
});*/



/*router.post('/post', (req, res) => {
    console.log(req.body);
    //res.json(req.body);
    dao.updateById(req, res);
});*/
module.exports = router;