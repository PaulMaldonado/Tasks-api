const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Task = require("./routes/Task");
const TaskController = require("./controllers/TaskController");

const app = express();
// Middleware for the cors
app.use(cors());

app.set('port', process.env.PORT || 3000);


// midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use(Task);

// Server
app.listen(app.get('port'));
console.log(`Server Running on port: http://localhost:${app.get('port')}`);