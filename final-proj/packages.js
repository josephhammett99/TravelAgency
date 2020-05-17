const pool = require('./skeleton');

class Dao {
    constructor() {
        this.pool = pool;
    }

    run (req, res,sql, params){
        this.pool.query(sql, params, function (error, rows) {
            if (error) {
                res.json({
                    'error': true,
                    'message': error
                });
            };
            res.json(rows);
        });
    }

    findAll (req,res) {
        let sql = `SELECT * from packages`;
        this.pool.query(sql, function(error, rows) {
            if (error) {
                res.json({
                    'error': true,
                    'message': error
                });
            };
            res.json(rows);
        });
        
    }

    findById(req,res,id) {
        console.log(req.params.id);
        
        let sql = `SELECT * from packages where id= ?`
        this.pool.query(sql,[id],(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    findAllResorts(req,res) {
        let sql = `SELECT * from resorts`;
        this.pool.query(sql, function(error, rows) {
            if (error) {
                res.json({
                    'error': true,
                    'message': error
                });
            };
            res.json(rows);
        });
        
    }
    findResortsById(req,res,id) {
        console.log(req.params.id);
        
        let sql = `SELECT * from resorts where id= ?`
        this.pool.query(sql,[id],(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };
    findAllDestinations(req,res) {
        let sql = `SELECT * from destinations`;
        this.pool.query(sql, function(error, rows) {
            if (error) {
                res.json({
                    'error': true,
                    'message': error
                });
            };
            res.json(rows);
        });
        
    }
    findDestinationsById(req,res,id) {
        console.log(req.params.id);
        
        let sql = `SELECT * from destinations where id= ?`
        this.pool.query(sql,[id],(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };
    findAllCities(req,res) {
        let sql = `SELECT * from cities`;
        this.pool.query(sql, function(error, rows) {
            if (error) {
                res.json({
                    'error': true,
                    'message': error
                });
            };
            res.json(rows);
        });
        
    }

    findCitiesById(req,res,id) {
        console.log(req.params.id);
        
        let sql = `SELECT * from cities where id= ?`
        this.pool.query(sql,[id],(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };
    findAllContacts(req,res) {
        let sql = `SELECT * from contacts`;
        this.pool.query(sql, function(error, rows) {
            if (error) {
                res.json({
                    'error': true,
                    'message': error
                });
            };
            res.json(rows);
        });
        
    }

    findContactsById(req,res,id) {
        console.log(req.params.id);
        
        let sql = `SELECT * from contacts where id= ?`
        this.pool.query(sql,[id],(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };
    findAllPages(req,res) {
        let sql = `SELECT * from pages`;
        this.pool.query(sql, function(error, rows) {
            if (error) {
                res.json({
                    'error': true,
                    'message': error
                });
            };
            res.json(rows);
        });
        
    }
    findPagesById(req,res,id) {
        console.log(req.params.id);
        
        let sql = `SELECT * from pages where id= ?`
        this.pool.query(sql,[id],(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };
    findAllCareers(req,res) {
        let sql = `SELECT * from careers`;
        this.pool.query(sql, function(error, rows) {
            if (error) {
                res.json({
                    'error': true,
                    'message': error
                });
            };
            res.json(rows);
        });
        
    }

    findCareersById(req,res,id) {
        console.log(req.params.id);
        
        let sql = `SELECT * from careers where id= ?`
        this.pool.query(sql,[id],(error,rows) => {
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

}
module.exports = Dao;