const pool = require('../config/dbconfig');

class Dao {
    constructor() {
        this.pool = pool;
    }



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
                "message": error
            })
        }
        res.json(rows);
    })
}

createContact(req,res,comment,email,name) {
    let VALUES = Object.values(req.body);

    let sql = `INSERT INTO contacts (comment,email,name) VALUES ('${comment}','${email}','${name}')`

    console.log(sql);

    this.pool.query(sql,VALUES,(error,rows) => {
        if (error) {
            res.json({
                "error":true,
                "messeage": error
            })
        };
        res.json(rows);
    })
}

};
module.exports = Dao;