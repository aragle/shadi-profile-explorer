var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'shadi'
});

connection.connect();

connection.query('SELECT id,photo,gender, religion,first_name,last_name,age, concat("https://www.shadi.com/imagehandler.php?f=",photo,"&t=2") as photo,concat("https://www.shadi.com/profile/sh000",user_id,".htm") as profile FROM shadi.users_profiles_approved where religion = 8 and photo != "" order by gender,age,religion;' as solution, function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', solution);
});

connection.end();