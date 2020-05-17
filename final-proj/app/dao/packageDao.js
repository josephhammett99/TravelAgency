const pool = require('../config/dbconfig');

class Dao {
    constructor() {
        this.pool = pool;
    }

    /*run (req, res,sql, params){
        this.pool.query(sql, params, function (error, rows) {
            if (error) {
                res.json({
                    'error': true,
                    'message': error
                });
            };
            res.json(rows);
        });
    }*/


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

    findBySort(req,res) {
        let sql = `select s.sort as sort, p.name, p.location, p.price, p.persons, p.days 
        from packages P 
        JOIN sort s ON p.sort_id = s.id`;
        this.pool.query(sql,function (error,rows){
            if (error) {
                res.json({
                    "error":true,
                    "messeage": error
                })
            }
            res.json(rows);
        })
    };

    updateById(req, res){
        let sql = 'UPDATE packages SET location = ?, destination_id = ? WHERE id = ?, city_id = ? WHERE id = ?, contact_id = ? WHERE id = ?';
        this.pool.query(sql, [req.body.resorts, req.body.destinations, req.body.cities, req.body.contacts, req.body.id], (err, rows) => {
            if (err) {
                res.json({
                    "error": true,
                    "message": err
                });
            };
            res.json(rows);
        });
    }
    run (req, res, sql, params) {
        this.pool.query(sql, params,function (error, rows) {
            if (error) {
                res.json({
                    "error": true,
                    "message": error
                });
            };
            res.json(rows);
        });
    }
}
module.exports = Dao;