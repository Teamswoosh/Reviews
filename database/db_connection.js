const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user_reviews',
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to mySql', err);
  } else {
    console.log('Succesfully connected to mySql!');
  }
});

module.exports = connection;
