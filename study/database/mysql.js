var mysql = require('mysql');

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'o2'
})
conn.connect();

// 데이터 베이스 불러오기

// var sql = 'SELECT * FROM topic';

// conn.query(sql, function(err, rows, fields){
//     if(err){
//         console.log(err);
//     } else {
//         for(var i=0; i<rows.length; i++){
//             console.log(rows[i].title)
//         }
//     }
// });

// 데이터 생성

// var sql = 'INSERT INTO topic (title, description, author) VALUES(?, ?, ?)';
// var params = ['Supervisor', 'Watcher', 'graphittie']

// conn.query(sql, params, function(err, rows, fields){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(rows)
//     }
// });

// 데이터 수정

// var sql = 'UPDATE topic SET title=?, author=? WHERE id=?';
// var params = ['NPM', 'leezche', 2]

// conn.query(sql, params, function(err, rows, fields){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(rows)
//     }
// });

// 데이터 삭제

var sql = 'DELETE FROM topic WHERE id=?';
var params = [1];

conn.query(sql, params, function(err, rows, fields){
    if(err){
        console.log(err);
    } else {
        console.log(rows)
    }
});

conn.end();