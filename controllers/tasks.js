const { Task }  = require('../models');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneTask(req, res) {
    try {
        const id = req.params.id
        const task = await Task.findById(id)
        if (task) {
            return res.json(task)
        }
        return res.status(404).send('Task with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createTask(req,res) {
    try {
        const task = await new Task (req.body)
        await task.save()
        return res.status(201).json({
            task
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateTask(req,res) {
    try {
        const id = req.params.id
        const task = await Task.findByIdAndUpdate(id, req.body, {new: true})
        if (task) {
            return res.status(200).json(task)
        }
        throw new Error('Task not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteTask(req,res) {
    try {
        const id = req.params.id
        const task =  await Task.findByIdAndDelete(id)
        if (task) {
            return res.status(200).json(task)
        }
        throw new Error('Task not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}




module.exports = {
    getAllTasks,
    getOneTask,
    createTask,
    updateTask,
    deleteTask
}