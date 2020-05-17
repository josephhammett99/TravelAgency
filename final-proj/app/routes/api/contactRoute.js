const daoClass = require('../../dao/contactDao');
const dao = new daoClass();

const express = require('express');
const router = express.Router();

// ALL RESORTS ROUTE -> /api/resorts/
/*router.get('/', (req, res) => {
    dao.findAll(req, res);
});*/

// FIND BY ID ROUTE -> /api/resorts/:id
router.get('/:id', (req, res) => {
    dao.findContactsById(req, res, req.params.id);
});

// FIND BY LOCATION ROUTE -> /api/resorts/location/:location
router.get('/contacts', (req, res) => { 
    dao.findAllContacts(req, res, req.params.contacts);
});
      
 router.post("/create/:comment/:email/:name", (req, res) => {
    console.log();
    dao.createContact(req,res,req.params.comment,req.params.email,req.params.name)
});

/*router.post('/post', (req, res) => {
    console.log(req.body);
    //res.json(req.body);
    dao.updateById(req, res);
});*/
module.exports = router;