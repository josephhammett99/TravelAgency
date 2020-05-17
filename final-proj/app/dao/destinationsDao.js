const pool = require('../config/dbconfig');

class Dao {
    constructor() {
        this.pool = pool;
    }



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
    
    let sql = `SELECT * from destination_id where id= ?`
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



};
module.exports = Dao;