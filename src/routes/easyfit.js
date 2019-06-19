const express = require('express');
const router = express.Router();


const mysqlConnection = require('../database');


router.post('/signup', (req,res) => {
    const { username, password, Name, Dateob, SexualGender, Email, Weightkg, Heightcm } = req.body;
    mysqlConnection.query('INSERT INTO UserPassword values (?,?)', [username,password]);
    mysqlConnection.query('INSERT INTO UserData values (?,?,?,?,?)', [username, Name, Dateob, SexualGender, Email]);
    mysqlConnection.query('INSERT INTO UserPhysical values (?,?,?)', [username, Weightkg, Heightcm]);
    res.send('usuario creado'); 
}); 
 
/*(router.put('/profile', (req,res) => {
    const { username, password, Name, Dateob, SexualGender, Email, Weightkg, Heightcm   } = req.body;
    mysqlConnection.query('UPDATE UserPassword ? where (username =?', [password]);
    mysqlConnection.query('UPDATE UserData ?', [ Name, Dateob, SexualGender, Email]);
    mysqlConnection.query('UPDATE UserPhysical ?', [ Weightkg, Heightcm]);

});*/


router.get('/profile', (req,res) => {
    const { username } = req.body;
    mysqlConnection.query('SELECT * FROM Routine where Username_fk = ? ', [username]);
});

module.exports = router;
