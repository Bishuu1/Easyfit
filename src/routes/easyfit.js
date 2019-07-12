const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

router.post('/signup', (req,res) => {
    const { username, password, Email } = req.body;
    mysqlConnection.query('INSERT INTO UserPassword values (?,?)', [ username, password ]);
    mysqlConnection.query('INSERT INTO UserData (username_fk, Email) values (?,?)', [ username, Email ]);
    mysqlConnection.query('INSERT INTO UserPhysical (username_fk) values (?)', [ username ]);
    res.send('Usuario Creado'); 
});

router.post('/login', (req,res) => {
    const { username, password } = req.body;
    console.log("se realiza la consulta");
    mysqlConnection.query('SELECT username FROM UserPassword where username = ? and password = ? ', [ username, password ], function (error, results, fields) {
        console.log(error);
        console.log(results);
        console.log(results[0]);
        
        if (results[0] == undefined){
            res.send({log:false});
        }
        else{
            const id = results[0].username
            res.send({id , log:true});
        }
    });
});

router.get('/profile:id', (req,res) => {
    res.render ('/perfil')
    const { id } = req.params;
    mysqlConnection.query('Select * FROM UserData, UserPhysical where username_fks = ?', [id], function(error, results, fields){
        console.log(error);
        console.log(results[0]);
        res.send(results[0]);
    });
    /*mysqlConnection.query('UPDATE UserPassword set ? where username = ?', [ UserPasswordup, username ]);
    mysqlConnection.query('UPDATE UserData set ? where username_fk = ?', [ UserDataup, username ]);
    mysqlConnection.query('UPDATE UserPhysical set ? where username_fk = ?', [ UserPhysicalup, username ]);
    res.send ('Usuario Actualizado');*/
});


router.get('/profile', (req,res) => {
    const { username } = req.body;
    mysqlConnection.query('SELECT * FROM Routine where Username_fk = ? ', [ username ]);
});

module.exports = router;
