const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.post('/signup', (req,res) => {
    const { username, password } = req.body;
    /*const newUser = {
        
    };*/
    mysqlConnection.query('INSERT INTO UserPassword ?', [username,password]);
});


module.exports = router;