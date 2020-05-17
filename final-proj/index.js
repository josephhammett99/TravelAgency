
const daoClass = require('./packages');
const express = require('express');
const app = express();
const dao = new daoClass();

const cors = require("cors");
const bodyParser = require('body-parser');
const router = require('./app/routes/router');
const port = 3020;

////////////////////////////////////////////////
app.listen(3020, () => {
    console.log(`http://localhost:${port}`); 
});

//app.use(corss());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// ALL ROUTES

app.get('/', (req, res) => {
    res.json({
        'All resorts': 'http://localhost:3020/api/resorts',
        'All destinations': 'http://localhost:3020/api/destinations',
        'All cities': 'http://localhost:3020/api/cities',
        'Contacts': 'http://localhost:3020/api/contacts',
        'All pages': 'http://localhost:3020/api/pages',
        'All packages': 'http://localhost:3020/api/packages',
        "Sort By Id": 'http://localhost:3020/api/packages/sort'
    });
});

/*app.post('/post', (req, res) => {
    console.log(req.body);
    
    res.json(req.body);
});*/

app.use('/api', router);
////////////////////////////////////////
app.use("/",(req, res, next) => {
    res.header({
        'Access-Control-Allow-Origin': '*'
    });
    next();
});

app.get('/',(req,res) => {
    res.json({
        'All Resorts': 'http://localhost:3020/api/resorts',
        "Find By Id": 'http://localhost:3020/api/resorts/1',
        "All Destinations": 'http://localhost:3020/api/destinations',
        "Find Destinations By Id": 'http://localhost:3020/api/destinations/1',
        "All Cities": 'http://localhost:3020/api/cities',
        "Find Cities By Id": 'http://localhost:3020/api/cities/1',
        "All Contacts": 'http://localhost:3020/api/contacts',
        "Find Contacts By Id": 'http://localhost:3020/api/contacts/1',
        "All Pages": 'http://localhost:3020/api/pages',
        "Find Contacts By Id": 'http://localhost:3020/api/pages/1',
        "All Packages": 'http://localhost:3020/api/packages',
        "Find Packages By Id": 'http://localhost:3020/api/packages/1',
        "Sort By Id": 'http://localhost:3020/api/packages/sort'
    })
});



app.get('/api/resorts', (req,res) => {
    dao.findAllResorts(req,res);
});

app.get("/api/resorts/:id", (req,res) => {
    dao.findResortsById(req,res,req.params.id)
});

app.get("/api/destinations", (req,res) => {
    dao.findAllDestinations(req,res)
});

app.get("/api/destinations/:id", (req,res) => {
    dao.findDestinationsById(req,res,req.params.id)
});

app.get("/api/cities", (req,res) => {
    dao.findAllCities(req,res)
});

app.get("/api/cities/:id", (req,res) => {
    dao.findCitiesById(req,res,req.params.id)
});

app.get("/api/contacts", (req,res) => {
    dao.findAllContacts(req,res)
});

app.get("/api/contacts/:id", (req,res) => {
    dao.findContactsById(req,res,req.params.id)
});

app.get("/api/pages", (req,res) => {
    dao.findAllPages(req,res)
});

app.get("/api/pages/:id", (req,res) => {
    dao.findPagesById(req,res,req.params.id)
});

app.get("/api/packages", (req,res) => {
    dao.findAllPackages(req,res)
});

app.get("/api/packages/:id", (req,res) => {
    dao.findPackagesById(req,res,req.params.id)
});

app.get("/api/careers", (req,res) => {
    dao.findAllCareers(req,res)
});

app.get("/api/careers/:id", (req,res) => {
    dao.findCareersById(req,res,req.params.id)
});

/*app.get("/api/packages/sort", (req,res) => {
    dao.findBySort(req,res)
});*/

