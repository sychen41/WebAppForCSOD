var express         = require('express');
var router          = express.Router();
var mysql           = require('mysql');
var connectionStr   = require('../../config').sqlConnectionStr.dev;
var verifyToken     = require('../middleware').verifyToken;

// middleware for checking token for all requests
router.use(verifyToken);
//INDEX route
router.get('/', function(req, res){
    var connection = mysql.createConnection(connectionStr);
    connection.query('select * from students order by customerNumber DESC', function(err, rows){
    //connection.query('select * from Student_Tab', function(err, rows){
        if (err) throw err;
        console.log('SUCCESS: retrieve students info from db');
        res.json(rows);
    });
    connection.end()
});

//CREATE route
router.post('/', function(req, res){
    var connection = mysql.createConnection(connectionStr);
    connection.connect();
    /*
    connection.query('select StudentKey from primaryKeys', function(err, rows){
        if (err) throw err;
        var studentKey = rows[0].StudentKey;
        console.log(typeof studentKey);
        req.body.StudentKey = studentKey;
        //connection.query('insert into customers set?', req.body, function(err, row){
        connection.query('insert into Student_Tab set?', req.body, function(err, row){
            if (err) throw err;
            console.log('SUCCESS: add new student to db');
            res.json({ message: 'student created!' });
            //console.log(row);
            connection.query('update primaryKeys set StudentKey=? where StudentKey=?', [studentKey+1, studentKey], function(err){
                if (err) throw err;
                connection.end();
            });
        });
    });
    */
    // for dev table
    connection.query('insert into students set?', req.body, function(err, row){
        if (err) throw err;
        console.log('SUCCESS: add new student to db');
        res.json({ message: 'student created!' });
    });
    connection.end();
    // end of for dev table
});

//DESTROY route
router.delete('/:student_id', function(req, res){
    var connection = mysql.createConnection(connectionStr);
    connection.connect();
    connection.query('delete from students where customerNumber=?', req.params.student_id, function(err){
    //connection.query('delete from Student_Tab where StudentKey=?', req.params.student_id, function(err){
        if (err) throw err;
        console.log('SUCCESS: delete a student from db');
        //res.send('Message from server: a student is deleted');
        connection.query('select * from students order by customerNumber DESC', function(err, rows){
        //connection.query('select * from Student_Tab', function(err, rows){
            if (err) throw err;
            console.log('SUCCESS: retrieve students info from db');
            res.json(rows);
            connection.end();
        });
    });
});

//SHOW route
router.get('/:student_id', function(req, res){
    var connection = mysql.createConnection(connectionStr);
    connection.connect();
    connection.query('select * from students where customerNumber=?', req.params.student_id, function(err, row){
    //connection.query('select * from Student_Tab where StudentKey=?', req.params.student_id, function(err, row){
        if (err) throw err;
        console.log('SUCCESS: retrieve a student info from db');
        res.json(row[0]); //row is an array with length 1 (if student id is unique), so we return the first element
    });
    connection.end();
});

//UPDATE route
router.put('/:student_id', function(req, res){
    var connection = mysql.createConnection(connectionStr);
    connection.connect();
    connection.query('update students set ? where customerNumber=?', [req.body, req.params.student_id], function(err, row){
    //connection.query('update Student_Tab set ? where StudentKey=?', [req.body, req.params.student_id], function(err, row){
        if (err) throw err;
        console.log('SUCCESS: update a student info in db');
        //console.log(row);
		res.json({ message: 'student updated!' });
        //res.send('Message from server: a student is updated');
    });
    connection.end();
});


module.exports = router;
