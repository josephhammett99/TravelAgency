const pool = require('../config/dbconfig');

class Dao {
    constructor() {
        this.pool = pool;
    }



findAllSort(req,res) {
    let sql = `SELECT * from sort`;
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

findSortById(req,res,id) {
    console.log(req.params.id);
    
    let sql = `SELECT * from sort_id where id= ?`
    this.pool.query(sql,[id],(error,rows) => {
        if (error) {
            res.json({
                "error":true,
                "messeage": error
            })
        }
        res.json(rows);
    })
}



findBySort(req,res,sort) {
    let sql = `SELECT p. * from packages p Join sort s On p.sort_id = s.id`;
    this.pool.query(sql,[sort],(error,rows) => {
        if (error) {
            res.json({
                "error":true,
                "messeage": error
            })
        }
        res.json(rows);
    })
};





};
module.exports = Dao;