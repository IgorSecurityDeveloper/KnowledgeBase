const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'DESKTOP-OUTTUAGK',         //Talvez precisará mudar algumas informações.
    user: 'root',
    password: '',
    database: 'DB_KB'
}
)

export default Routes;