const express = require('express');
const router = express.Router();


router.use('/packages', require('./api/packageRoutes'));
/*router.use('/sort', require('./api/packageRoutes'));*/

router.use('/resorts', require('./api/resortsRoute'));

router.use('/destinations', require('./api/destinationsRoute'));

router.use('/cities', require('./api/citiesRoute'));

router.use('/contacts', require('./api/contactRoute'));

router.use('/careers', require('./api/careerRoute'));
module.exports = router;