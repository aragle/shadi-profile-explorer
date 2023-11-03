var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'shadi'
});

connection.connect();

const express = require('express');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Set up a basic route
app.get('/', (req, res) => {

  connection.query('SELECT * FROM users_profiles_approved where photo != "" and gender = 0 limit 2000;', function (err, result) {

    if (err) {
      throw err;
    } else {
      obj = { users: result };
      res.render('index.ejs', obj);
    }
  });

  connection.end();

});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

