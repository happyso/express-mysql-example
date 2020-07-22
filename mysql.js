var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',    // 호스트 주소
  user     : 'root',           // mysql user
  password : '1234',       // mysql password
  database : 'testdb'         // mysql 데이터베이스
});
connection.connect();

connection.query('SELECT * from mytable', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();