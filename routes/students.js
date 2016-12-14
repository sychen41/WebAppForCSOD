var express         = require('express');
var router          = express.Router();
var mysql           = require('mysql');
var connectionStr   = require('../config').sqlConnectionStr.dev;

//INDEX route
router.get('/', function(req, res){
    var connection = mysql.createConnection(connectionStr);
    getAllStudentsAndResponseAndEndConnection(connection, res);
});

//CREATE route
router.post('/', function(req, res){
    var connection = mysql.createConnection(connectionStr);
    connection.connect();
    connection.query('insert into customers set?', req.body, function(err, row){
        if (err) throw err;
        console.log('SUCCESS: add new student to db');
        console.log(row);
    });
    getAllStudentsAndResponseAndEndConnection(connection, res);
});

//DESTROY route
router.delete('/:student_id', function(req, res){
    var connection = mysql.createConnection(connectionStr);
    connection.connect();
    connection.query('delete from customers where customerNumber=?', req.params.student_id, function(err){
        if (err) throw err;
        console.log('SUCCESS: delete a student from db');
    });
    getAllStudentsAndResponseAndEndConnection(connection, res);
});

//SHOW route
router.get('/:student_id', function(req, res){
    var connection = mysql.createConnection(connectionStr);
    connection.connect();
    connection.query('select * from customers where customerNumber=?', req.params.student_id, function(err, row){
        if (err) throw err;
        console.log('SUCCESS: retrieve a student info from db');
        res.json(row);
    });
    connection.end();
});

//UPDATE route
router.put('/:student_id', function(req, res){
    var connection = mysql.createConnection(connectionStr);
    connection.connect();
    connection.query('update customers set ? where customerNumber=?', [req.body, req.params.student_id], function(err, row){
        if (err) throw err;
        console.log('SUCCESS: update a student info in db');
        console.log(row);
    });
    getAllStudentsAndResponseAndEndConnection(connection, res);
});

function getAllStudentsAndResponseAndEndConnection(connection,res) {
    connection.query('select * from customers order by customerNumber DESC', function(err, rows){
        if (err) throw err;
        console.log('SUCCESS: retrieve students info from db');
        res.json(rows);
    });
    connection.end();
}
module.exports = router;
