const mysql = require('mysql8');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'crud_arch',
    password: 'arch4321',
    database: 'crud_arch'
});
