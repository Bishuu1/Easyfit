const express = require('express');
const router = express.Router();


const mysqlConnection = require('../database');

<<<<<<< HEAD
router.get('/signup', (req, res) => {
    res.send('hola');
});

router.post('/signup', (req,res) => {
    const { username, password, Name, Dateob, SexualGender, Email, Weightkg, Heightcm } = req.body;
    mysqlConnection.query('INSERT INTO UserPassword value ?', [username,password]);
    mysqlConnection.query('INSERT INTO UserData value ?', [username, Name, Dateob, SexualGender, Email]);
    mysqlConnection.query('INSERT INTO UserPhysical value ?', [username, Weightkg, Heightcm]);
    
});

router.put('/profile', (req,res) => {
    const { username, password, Name, Dateob, SexualGender, Email, Weightkg, Heightcm } = req.body;
    const editPass = {
        password,
    };
    const editData = {
        Name,
        Dateob,
        SexualGender,
        Email,
    };
    const editPhysical = {
        Weightkg,
        Heightcm
    };
    mysqlConnection.query('UPDATE UserPassword  ? WHERE username = ?', [ editPass, username ]);
    mysqlConnection.query('UPDATE UserData set ? WHERE username = ?', [ editData, username ]);
    mysqlConnection.query('UPDATE UserPhysical set ? WHERE username= ?' [ editPhysical, username ]);
=======

router.post('/signup', (req,res) => {
    const { username, password, Name, Dateob, SexualGender, Email, Weightkg, Heightcm } = req.body;
    mysqlConnection.query('INSERT INTO UserPassword values (?,?)', [ username, password ]);
    mysqlConnection.query('INSERT INTO UserData values (?,?,?,?,?)', [ username, Name, Dateob, SexualGender, Email ]);
    mysqlConnection.query('INSERT INTO UserPhysical values (?,?,?)', [ username, Weightkg, Heightcm ]);
    res.send('Usuario Creado'); 
});

router.get('/signup', (req,res) => {
    res.send('Si funciona pero necesito ayuda');
});
>>>>>>> Fix

router.put('/profile', (req,res) => {
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
<<<<<<< HEAD
    mysqlConnection.query('SELECT * FROM Routine where Username_fk = ? ', [username]);
});


module.exports = router;
=======
    mysqlConnection.query('SELECT * FROM Routine where Username_fk = ? ', [ username ]);
});

module.exports = router;
>>>>>>> Fix
