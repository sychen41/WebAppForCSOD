var express         = require('express');
var router          = express.Router();
var mysql           = require('mysql');
//var connectionStr   = require('../../config').sqlConnectionStr.dev;
var connectionStr   = require('../../config').sqlConnectionStr.prod;
var verifyToken     = require('../middleware').verifyToken;

// middleware for checking token for all requests
router.use(verifyToken);
//INDEX route
router.get('/', function(req, res){
    var connection = mysql.createConnection(connectionStr);
    //connection.query('select * from parents order by customerNumber DESC', function(err, rows){
    connection.query('select * from Parent_Tab', function(err, rows){
        if (err) throw err;
        console.log('SUCCESS: retrieve parents info from db');
        res.json(rows);
    });
    connection.end()
});

//CREATE route
router.post('/', function(req, res){
    var connection = mysql.createConnection(connectionStr);
    console.log(req.body);
    connection.connect();
    //for prod table
    //simply use a newly generated "ParentKey" (a number > 4000) for a newly created parent
    connection.query('select StudentKey from primaryKeys', function(err, rows){
        if (err) throw err;
        var parentKey = rows[0].StudentKey;
        console.log(typeof parentKey);
        req.body.ParentKey = parentKey;
        //connection.query('insert into customers set?', req.body, function(err, row){
        connection.query('insert into Parent_Tab set?', req.body, function(err, row){
            if (err) throw err;
            console.log('SUCCESS: add new parent to db');
            res.json({ message: 'parent created!' });
            //console.log(row);
            connection.query('update primaryKeys set StudentKey=? where StudentKey=?', [parentKey+1, parentKey], function(err){
                if (err) throw err;
                connection.end();
            });
        });
    });
    //end of for prod table
    /*
    // for dev table
    connection.query('insert into parents set?', req.body, function(err, row){
        if (err) throw err;
        console.log('SUCCESS: add new parent to db');
        res.json({ message: 'parent created!' });
    });
    connection.end();
    // end of for dev table
    */
});

//DESTROY route
router.delete('/:parent_id', function(req, res){
    var connection = mysql.createConnection(connectionStr);
    connection.connect();
    //connection.query('delete from parents where customerNumber=?', req.params.parent_id, function(err){
    connection.query('delete from Parent_Tab where ParentKey=?', req.params.parent_id, function(err){
        if (err) throw err;
        console.log('SUCCESS: delete a parent from db');
        //res.send('Message from server: a parent is deleted');
        //connection.query('select * from parents order by customerNumber DESC', function(err, rows){
        connection.query('select * from Parent_Tab', function(err, rows){
            if (err) throw err;
            console.log('SUCCESS: retrieve parents info from db');
            res.json(rows);
            connection.end();
        });
    });
});

//SHOW route
router.get('/:parent_id', function(req, res){
    var connection = mysql.createConnection(connectionStr);
    connection.connect();
    //connection.query('select * from parents where customerNumber=?', req.params.parent_id, function(err, row){
    connection.query('select * from Parent_Tab where ParentKey=?', req.params.parent_id, function(err, rows){
        if (err) throw err;
        console.log('SUCCESS: retrieve a parent info from db');
        res.json(rows); //row is an array with length 1 (if parent id is unique), so we return the first element
    });
    connection.end();
});

//UPDATE route
router.put('/:parent_id', function(req, res){
    var connection = mysql.createConnection(connectionStr);
    connection.connect();
    //connection.query('update parents set ? where customerNumber=?', [req.body, req.params.parent_id], function(err, row){
    connection.query('update Parent_Tab set ? where ParentKey=?', [req.body, req.params.parent_id], function(err, row){
        if (err) throw err;
        console.log('SUCCESS: update a parent info in db');
        //console.log(row);
		res.json({ message: 'parent updated!' });
        //res.send('Message from server: a parent is updated');
    });
    connection.end();
});


module.exports = router;
