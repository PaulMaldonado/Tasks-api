const db = require("../database/db");

exports.createTasks = ((req, res) => {
    const newTask = {
        name: req.body.name,
        description: req.body.description,
        date: req.body.date
    };

    if(req.body.name === '' || req.body.description === '' || req.body.date === '') {
        console.log("No puedes guardar tareas vacias");

        return;
    }

    const $task = "INSERT INTO tasks SET ?";

    db.query($task, newTask, (error, result) => {
        if(error) throw error;

        return res.json({
            result,
            status: 200,
            message: "Task added successfully"
        });
    });
});

exports.findAllTasks = ((req, res) => {
    if(req.body.name === '' || req.body.description === '' || req.body.date === '') {
        console.log("No se encontraron tareas en la Base de Datos");

        return;
    }

    const $tasks = "SELECT * FROM tasks";

    db.query($tasks, (error, results) => {
        if(error) throw error;

        return res.json({
            results,
            status: 200,
            message: 'Tasks found successfully'
        });
    });
});

exports.findByIdTask = ((req, res) => {
    const id = req.params.id;

    const $taskId = `SELECT * FROM tasks WHERE id = ${id}`;

    db.query($taskId, (error, result) => {
        if(error) throw error;

        return res.json({
            result,
            status: 200,
            message: 'A task with that id was successfully found'
        });
    });
});

exports.deleteTask = ((req, res) => {
    const id = req.params.id;

    if(!id) throw error;

    const $taskDelete = `DELETE FROM tasks WHERE id = ${id}`;

    db.query($taskDelete, (error, result) => {
        try {
            return res.json({
                result,
                status: 200,
                message: 'Deleted task successfully'
            });
        } catch (error) {
            return res.json.status(412).send({
                success: false,
                message: `Couldnt delete the task ${error}`
            });
        }
    });
});

exports.updateTask = ((req, res) => {
    const id = req.params.id;
    
    const updateTask = {
        name: req.body.name,
        description: req.body.description,
        date: req.body.date
    };

    if(req.body.name === '' || req.body.description === '' || req.body.date === '') {
        console.log("We couldn't update the tasks");

        return;
    }

    const $taskUpdate = `UPDATE tasks SET ? WHERE id = ${id}`;

    db.query($taskUpdate, updateTask, (error, result) => {
        if(error) throw error;

        return res.json({
            result,
            status: 200,
            message: 'Updated task successfully'
        });
    });
});
