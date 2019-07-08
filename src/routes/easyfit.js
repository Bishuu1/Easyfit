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
    mysqlConnection.query('SELECT password FROM UserPassword where username = ? and password = ? ', [ username, password ], function (error, results, fields) {
        console.log(error);
        console.log(results);
        console.log(results[0]);
        if (results[0] == undefined){
            res.send("error 1");
        }
        else{
            res.send("log");
        }
    });
});

router.post('/profile', (req,res) => {
    const { username, password, Name, Dateob, SexualGender, Email, Weightkg, Heightcm } = req.body;
    const UserPasswordup = {
        password,
    };
    const UserDataup = {
        Name,
        Dateob,
        SexualGender,
        Email
    };
    const UserPhysicalup = {
        Weightkg,
        Heightcm
    };
    mysqlConnection.query('UPDATE UserPassword set ? where username = ?', [ UserPasswordup, username ]);
    mysqlConnection.query('UPDATE UserData set ? where username_fk = ?', [ UserDataup, username ]);
    mysqlConnection.query('UPDATE UserPhysical set ? where username_fk = ?', [ UserPhysicalup, username ]);
    res.send ('Usuario Actualizado');
});


router.get('/profile', (req,res) => {
    const { username } = req.body;
    mysqlConnection.query('SELECT * FROM Routine where Username_fk = ? ', [ username ]);
});

module.exports = router;
