const mysql = require ('mysql');

const mysqlConnection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'Easy_fit',
    insecureAuth : true,
});

mysqlConnection.connect(function (err){
    if(err) {
        console.log(err);
        return;
    } else {
        console.log ('Succesful');
    }
});

module.exports = mysqlConnection;