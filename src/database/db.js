const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task_api'
});

// Comprobar si existe una conexión
db.connect((error) => {
   if(error) throw error;

   console.log("Database connected successfully");
});

module.exports = db;